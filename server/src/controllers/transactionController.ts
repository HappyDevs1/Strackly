import { Request, Response } from "express";
import Item from "../models/itemModel";
import Transaction from "../models/transactionModel";
import EmployeeUser from "../models/employeeUserModel";
import Organisation from "../models/organisationModel";
import { Types } from "mongoose";
import mongoose from "mongoose";

export const createTransaction = async (req: Request, res: Response) : Promise<any> => {
  try {
    const { quantity, paymentType } = req.body;
    const { organisationId } = req.params;
    const { employeeId } = req.params;
    const { itemId } = req.params;

    if (!quantity || !paymentType) {
      return res.status(406).json({ message: "All fields are required" });
    }
    if (!organisationId || !employeeId || !itemId) {
      return res.status(406).json({ message: "Organisation ID, Employee ID and Item ID cannot be empty" });
    }

    // Check if IDs are valid
    if (!Types.ObjectId.isValid(organisationId)) {
      return res.status(406).json({ message: "Invalid organisation ID format", id: organisationId });
    }

    if (!Types.ObjectId.isValid(employeeId)) {
      return res.status(406).json({ message: "Invalid employee ID format" });
    }

    if (!Types.ObjectId.isValid(itemId)) {
      return res.status(406).json({ message: "Invalid item ID format" });
    }

    //Check if employee is allowed to make transactions
    const employee = await EmployeeUser.findById(employeeId);

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    if (employee.organisation.toString() !== organisationId.toString()) { // Try JSON.stringify if still not working
      return res.status(403).json({ message: 'Employee not allowed to make transactions for this organisation' });
    }

    // Find the item
    const item = await Item.findById(itemId);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    // Check stock
    if (item.stockQuantity < quantity) {
      return res.status(400).json({ message: 'Not enough stock' });
    }

    // Calculate total amount
    const totalAmount = item.price * quantity;

    // Create the transaction
    const transaction = new Transaction({
      organisation: organisationId,
      employeeId,
      itemId,
      itemName: item.name,
      price: item.price,
      quantity,
      totalAmount,
      paymentType
    });
    await transaction.save();

    // Update item stock
    item.stockQuantity -= quantity;
    await item.save();

    //increment revenue
    await Organisation.findByIdAndUpdate(organisationId, {
      $inc: { revenue: totalAmount },
      $set: { updatedAt: new Date() },
    });

    res.status(201).json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const getTransactions = async (req: Request, res: Response): Promise<any> => {
  try {
    const { organisationId } = req.params;

    const transactions = await Transaction.find({ organisation: organisationId });

    res.status(200).json({ foundTransactions: transactions });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
}

export const getTransactionByType = async (req: Request, res: Response): Promise<any> => {
  try {
    const { organisationId, paymentType } = req.params;

    const transactions = await Transaction.find({
      organisation: new mongoose.Types.ObjectId(organisationId),
      paymentType: new RegExp(`^${paymentType}$`, "i") // make it case-insensitive
    });

    res.status(200).json({ transactions });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};