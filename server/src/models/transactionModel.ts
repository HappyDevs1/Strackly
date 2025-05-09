import mongoose, { Document, Schema } from "mongoose";

export interface ITransaction extends Document {
  _id: string;
  organisation: mongoose.ObjectId;
  employeeId: mongoose.ObjectId;
  itemId: mongoose.ObjectId;
  price: number;
  quantity: number;
  totalAmount: number;
  paymentType: string;
  createdAt: Date;
  updatedAt: Date;
}

const TransactionSchema: Schema = new Schema({
  organisation: { type: mongoose.Schema.Types.ObjectId, ref: "Organisation" },
  employeeId: { type: Schema.Types.ObjectId, ref: "EmployeeUser", required: true },
  itemId: { type: Schema.Types.ObjectId, ref: "Item", required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
  paymentType: { type: String, required: true, enum: ["cash", "card"]},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Transaction = mongoose.models.Transactions || mongoose.model<ITransaction>("Transaction", TransactionSchema);

export default Transaction;