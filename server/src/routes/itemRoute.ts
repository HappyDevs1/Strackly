import express from "express";
import { Request, Response } from "express";
import { addItem, getItem, getItems, updateItem, deleteItem } from "../controllers/itemController";

const router = express.Router();

router.post("/add", addItem);
router.get("/items", getItems);
router.get("/item/:id", getItem);
router.put("/update/:id", updateItem);
router.delete("/delete/:id", deleteItem);
router.get("/", (req, res) => {
  res.send("Welcome to the item route");
});
router.get("*", (req: Request, res: Response) => {
  res.status(404).send("Route not found");
});

export default router;