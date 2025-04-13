import { Request, Response } from "express";
import MasterUser from "../models/masterUserModel";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const registerMasterUser = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { name, email, phone, organisationName, organisationId, password } =
      req.body;

    if (
      !name ||
      !email ||
      !phone ||
      !organisationName ||
      !organisationId ||
      !password
    ) {
      return res.status(406).json({ message: "All fields are required" });
    }

    const existingUser = await MasterUser.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new MasterUser({
      name,
      email,
      phone,
      organisationName,
      organisationId,
      password: hashedPassword,
    });

    await newUser.save();

    res
      .status(201)
      .json({
        message: "New master user created successfully",
        masterUser: newUser,
      });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const loginMasterUser = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { email, password } = req.body;

    if (!req.body) {
      return res.status(406).json({ message: "Fields cannot be empty" });
    }

    const user = await MasterUser.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET as string, {
      expiresIn: "1h",
    });

    res
      .status(200)
      .json({
        message: "Master user login successful",
        loggedInUser: user,
        loginToken: token,
      });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
