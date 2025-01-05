import Item from "../models/itemModel";
import { Request, Response } from "express";
import { Types } from "mongoose";

export const addItem = async (req: Request, res: Response): Promise<any> => {
  try {
    const { name, price, quantity } = req.body;

    if (!name || !price || !quantity) {
      return res.status(406).json({ message: "All fields are required" });
    }

    const existingItem = await Item.findOne({ name });

    if (existingItem) {
      return res.status(409).json({ message: "Item already exists" });
    }

    const newItem = new Item({ name, price, quantity });

    await newItem.save();

    res.status(201).json({ message: "New item created successfully", item: newItem });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
}

export const getItems = async (req: Request, res: Response): Promise<any> => {
  try {
    const items = await Item.find();

    res.status(200).json({ availableItems: items });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
}

export const getItem = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;

    if (!Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: "Invalid company ID format" });
      return;
    }
    
    const item = await Item.findById(id);
    
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({ foundItem: item });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
}

export const updateItem = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;


    if (!Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: "Invalid company ID format" });
      return;
    }

    const updateFields = req.body; // Contains dynamic fields to update

    const item = await Item.findByIdAndUpdate(
      id,
      { $set: updateFields }, // Dynamically updates only the provided fields
      { new: true } // Returns the updated document
    );

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    
    res.status(200).json({ updatedItem: item });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
}

export const deleteItem = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;

    if (!Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: "Invalid company ID format" });
      return;
    }

    await Item.findByIdAndDelete(id);

    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
}