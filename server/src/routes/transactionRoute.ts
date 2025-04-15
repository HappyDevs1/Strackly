import express from "express";
import { Request, Response} from "express";
import { createTransaction, getTransactions } from "../controllers/transactionController";

const router = express.Router();

router.post("/create/:organisationId/:employeeId/:itemId", createTransaction);
router.get("/transactions/:organisationId", getTransactions);
router.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the transaction route");
});
router.get("*", (req: Request, res: Response) => {
  res.status(404).send("Route not found");
});

export default router;