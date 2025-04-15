import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/masterUserRoute";
import itemRoutes from "./routes/itemRoute";
import transactionRoutes from "./routes/transactionRoute";
import organisationRoutes from "./routes/organisationRoute";
import employeeUserRoutes from "./routes/employeeUserRoute";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const mongo = process.env.MONGO_URL;

app.use(express.json());
app.use(cors())

app.use("/api/user", userRoutes);
app.use("/api/item", itemRoutes);
app.use("/api/transaction", transactionRoutes);
app.use("/api/organisation", organisationRoutes);
app.use("/api/employee", employeeUserRoutes);
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

mongoose.connect(mongo as string)
.then(() => {
  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
})
.catch((error) => {
  console.error("Error connecting to MongoDB: ", error);
})