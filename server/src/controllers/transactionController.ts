import { Request, Response } from "express";
import Item from "../models/itemModel";
import Transaction from "../models/transactionModel";

export const createTransaction = async (req: Request, res: Response) : Promise<any> => {
  try {
    const { userId, itemId, quantity } = req.body;

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
      userId,
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
