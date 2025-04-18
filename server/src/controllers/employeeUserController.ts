import { Request, Response } from "express";
import mongoose from "mongoose";
import EmployeeUser from "../models/employeeUserModel";
import Organisation from "../models/organisationModel";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { Types } from "mongoose";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

export const createEmployeeUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { username, password } = req.body;
    const { orgId } = req.params;

    if (!username || !password) {
      return res.status(406).json({ message: "All fields are required" });
    }

    if (!orgId) {
      return res.status(406).json({ message: "Organisation ID cannot be empty" });
    }

    if (!mongoose.Types.ObjectId.isValid(orgId)) 
      return res.status(404).json({ msg: `No organisation with : ${orgId}` });

    const existingEmployee = await EmployeeUser.findOne({ username });

    if (existingEmployee) {
      return res.status(409).json({ message: "Employee already exists" });
    }

    const existingOrg = await Organisation.findById(orgId);

    const hashedPassword = await bcrypt.hash(password, 12);

    if (!existingOrg) {
      return res.status(404).json({ message: "Organisation not found" });
    } else {
      const newEmployee = new EmployeeUser({
        organisation: orgId,
        username,
        password: hashedPassword,
      });

      await Organisation.findByIdAndUpdate(orgId, {
        $push: { employees: newEmployee._id },
        $set: { updatedAt: new Date() },
      })

      await newEmployee.save();

      res.status(201).json({
        message: "New employee created successfully",
        employee: newEmployee,
      });
    }

  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
}

export const loginEmployeeUser = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { username, password } = req.body;

    if (!req.body) {
      return res.status(406).json({ message: "Fields cannot be empty" });
    }

    const employee = await EmployeeUser.findOne({ username });

    if (!employee) {
      return res.status(404).json({ message: "Invalid credentials" });
    }
    const isMatch = await bcrypt.compare(password, employee.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: employee._id }, JWT_SECRET as string, {
      expiresIn: "1h",
    });

    res
      .status(200)
      .json({
        message: "Employee user login successful",
        loggedInEmployeeUser: employee,
        loginToken: token,
      });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getEmployeeUser = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(406).json({ message: "ID cannot be empty" });
    }

    const employee = await EmployeeUser.findById(id);

    if (!employee) {
      return res.status(404).json({ message: "Employee user not found" });
    }

    res.status(200).json({ foundEmployeeUser: employee });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const updateEmployeeUser = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const { empId } = req.params;
  
    if (!empId) {
      return res.status(406).json({ message: "ID cannot be empty" });
    }

    if (!Types.ObjectId.isValid(empId)) {
          return res.status(404).json({ message: `No master user with ID: ${empId}` });
        }
    
    const updateFields = req.body;
    
    if (!updateFields) {
      return res.status(406).json({ message: "Fields cannot be empty" });
    }

    const updatedEmployee = await EmployeeUser.findByIdAndUpdate(
      empId,
      { $set: updateFields },
      { new: true }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: "Employee user not found" });
    }

    res.status(200).json({
      message: "Employee user updated successfully",
      updatedEmployeeUser: updatedEmployee,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
}