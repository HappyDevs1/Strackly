import express from "express";
import { Request, Response } from "express";
import { createOrganisation, findOrganisation } from "../controllers/organisationController";

const router = express.Router();

router.post("/create/:masId", createOrganisation);
router.get("/get/:id", findOrganisation);
router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome to the organisation route" });
});
router.get("*", (req: Request, res: Response) => {
  res.status(404).send("Route not found");
});

export default router;



