import { Request, Response } from "express";
import Item from "../models/itemModel";
import Transaction from "../models/transactionModel";
import EmployeeUser from "../models/employeeUserModel";
import { Types } from "mongoose";

export const createTransaction = async (req: Request, res: Response) : Promise<any> => {
  try {
    const { quantity } = req.body;
    const { organisationId, employeeId, itemId } = req.params;

    if (!quantity) {
      return res.status(406).json({ message: "Quantity is required" });
    }
    if (!organisationId || !employeeId || !itemId) {
      return res.status(406).json({ message: "Organisation ID, Employee ID and Item ID cannot be empty" });
    }

    // Check if IDs are valid
    if (Types.ObjectId.isValid(organisationId) && Types.ObjectId.isValid(employeeId) && Types.ObjectId.isValid(itemId)) {
      return res.status(406).json({ message: "Invalid ID format" });
    }

    //Check if employee is allowed to make transactions
    const employee = await EmployeeUser.findById(employeeId);

    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    if (employee.organisation.toString() !== organisationId) { // Try JSON.stringify if still not working
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
    });
    await transaction.save();

    // Update item stock
    item.stockQuantity -= quantity;
    await item.save();

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