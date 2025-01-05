import { Request, Response } from "express";
import User from "../models/userModel";
import bcrypt from "bcrypt";

export const registerUser = async (req: Request, res: Response) :Promise<any> => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || !email || !phone || !password ) {
      return res.status(406).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({ name, email, phone, password: hashedPassword  });

    await newUser.save();

    res.status(201).json({ message: "New user creates successfully", user: newUser })
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error});
  }
}

export const loginUser = async (req: Request, res: Response) :Promise<any> => {
  try {
    const { email, password } = req.body;

    if (!req.body) {
      return res.status(406).json({ message: "Fields cannot be empty" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    res.status(200).json({ message: "Login successful", user})
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
} 