import express from "express";
import { Request, Response } from "express";
import { createItem, getItem, getAllItems, updateItem, deleteItem } from "../controllers/itemController";

const router = express.Router();

router.post("/create/:orgId/:masId", createItem);
router.get("/items/:orgId", getAllItems);
router.get("/item/:itemId", getItem);
router.put("/update/:itemId/:masId", updateItem);
router.delete("/delete/:itemId/:masId", deleteItem);
router.get("/", (req, res) => {
  res.send("Welcome to the item route");
});
router.get("*", (req: Request, res: Response) => {
  res.status(404).send("Route not found");
});

export default router;