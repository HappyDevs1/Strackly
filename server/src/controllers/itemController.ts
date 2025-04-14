import Item from "../models/itemModel";
import { Request, Response } from "express";
import { Types } from "mongoose";
import MasterUser from "../models/masterUserModel";
import Organisation from "../models/organisationModel";

export const createItem = async (req: Request, res: Response): Promise<any> => {
  try {
    const { name, price, stockQuantity, picture } = req.body;

    const { orgId, masId } = req.params;

    if (!name || !price || !stockQuantity || !picture) {
      return res.status(406).json({ message: "All fields are required" });
    }

    if (!orgId && !masId) {
      return res.status(406).json({ message: "Params ID cannot be empty" });
    }

    const existingItem = await Item.findOne({ name });

    if (existingItem) {
      return res.status(409).json({ message: "Item already exists" });
    }

    if (!Types.ObjectId.isValid(orgId)) {
      return res.status(404).json({ message: `No organisation with ID: ${orgId}` });
    }

    if (!Types.ObjectId.isValid(masId)) {
      return res.status(404).json({ message: `No master user with ID: ${masId}` });
    }

    const findMaster = await MasterUser.findById(masId);

    if (!findMaster) {
      return res.status(405).json({ message: "User not allowed to create item" })
    }

    const newItem = new Item({ organisation: orgId, name, price, stockQuantity, picture });

    await newItem.save();

    res.status(201).json({ message: "New item created successfully", item: newItem });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
}

export const getAllItems = async (req: Request, res: Response): Promise<any> => {
  try {
    const { orgId } = req.params;

    if (!orgId) {
      return res.status(406).json({ message: "Organisation ID cannot be empty" });
    }

    if (!Types.ObjectId.isValid(orgId)) {
      return res.status(404).json({ message: `No organisation with ID: ${orgId}` });
    }

    const items = await Item.find({ orgId }).populate("organisation");

    res.status(200).json({ availableItems: items });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
}

export const getItem = async (req: Request, res: Response): Promise<any> => {
  try {
    const { itemId } = req.params;

    if (!Types.ObjectId.isValid(itemId)) {
      res.status(400).json({ message: "Invalid item ID format" });
      return;
    }
    
    const item = await Item.findById(itemId).populate("organisation");
    
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
    const { itemId } = req.params;
    const { additionalStock } = req.body;

    // Check if product ID is valid
    if (!Types.ObjectId.isValid(itemId)) {
      res.status(400).json({ message: "Invalid item ID format" });
      return;
    }

    // Check if additional stock is provided
    if (!additionalStock) {
      return res.status(406).json({ message: "Additional stock is required" });
    } else if (additionalStock < 0) { // Check if additional stock is a positive number
      return res.status(400).json({ message: "Additional stock must be a positive number" });
    }

    //Check if user is allowed to update item
    const { masId } = req.params;

    if (!masId && !itemId) {
      return res.status(406).json({ message: "Params ID cannot be empty" });
    }

    if (!Types.ObjectId.isValid(masId)) {
      return res.status(404).json({ message: `No master user with ID: ${masId}` });
    }

    const foundMaster = await MasterUser.findById(masId);

    if (!foundMaster) {
      return res.status(405).json({ message: "User not allowed to update item" })
    }


    const updateFields = req.body; // Contains dynamic fields to update

    const item = await Item.findByIdAndUpdate(
      itemId,
      { $set: updateFields }, // Dynamically updates only the provided fields
      { new: true } // Returns the updated document
    );

    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    item.stockQuantity += additionalStock; // Update stock quantity

    await item.save(); // Save the updated item

    res.status(200).json({ message: "Stock updated sucessfully", updatedItem: item });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
}

export const deleteItem = async (req: Request, res: Response): Promise<any> => {
  try {
    const { itemId, masId } = req.params;

    if (!Types.ObjectId.isValid(itemId)) {
      res.status(400).json({ message: "Invalid item ID format" });
      return;
    }

    if (!Types.ObjectId.isValid(masId)) {
      res.status(400).json({ message: "Invalid master user ID format" });
      return;
    }

    // Check if user is allowed to delete item
    const foundMaster = await MasterUser.findById(masId);
    
    if (!foundMaster) {
      return res.status(405).json({ message: "User not allowed to delete item" });
    }

    await Item.findByIdAndDelete(itemId);

    res.status(200).json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
}