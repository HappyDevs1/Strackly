import { Request, Response } from "express";
import express from "express";
import { createEmployeeUser, getEmployeeUser, loginEmployeeUser } from "../controllers/employeeUserController";

const router = express.Router();

router.post("/create/:orgId", createEmployeeUser);
router.post("/login",loginEmployeeUser);
router.get("/get/:id", getEmployeeUser);
router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to the employee user route" });
});
router.get("*", (req: Request, res: Response) => {
  res.status(404).send("Route not found");
});

export default router;