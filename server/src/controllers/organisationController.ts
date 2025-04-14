import { Request, Response } from "express";
import Organisation from "../models/organisationModel";
import mongoose from "mongoose";

export const createOrganisation = async (req: Request, res: Response): Promise<any> => {
  try {
    const { organisationName, organisationAddress, organisationPhone, organisationEmail } = req.body;

    const { masId } = req.params;
    
    if (!organisationName || !organisationAddress || !organisationPhone || !organisationEmail) {
      return res.status(406).json({ message: "All fields are required" });
    }

    if (!masId) {
      return res.status(406).json({ message: "Master user ID cannot be empty" });
    }

    const existingOrganisation = await Organisation.findOne({ organisationName, organisationEmail });

    if (existingOrganisation) {
      return res.status(409).json({ message: "Organisation already exists" });
    }

    const newOrganisation = new Organisation({
      organisationName,
      organisationAddress,
      organisationPhone,
      organisationEmail,
      masterUser: masId,
    });

    await newOrganisation.save();

    res.status(201).json({ message: "New organisation created successfully", organisation: newOrganisation });

  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
}

export const findOrganisation = async (req: Request, res: Response): Promise<any> => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(406).json({ message: "Organisation ID cannot be empty" });
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: `No organisation with ID: ${id}` });
    }

    const organisation = await Organisation.findById(id).populate("employees").populate("products").populate("transactions");

    if (!organisation) {
      return res.status(404).json({ message: "Organisation not found" });
    }

    res.status(200).json({ foundOrganisation: organisation });
  } catch (error) {
    res.status(500).json({ message: "Internal server error"})
  }
}