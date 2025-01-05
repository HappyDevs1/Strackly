import mongoose, { Document, Schema } from "mongoose";

export interface ITransaction extends Document {
  _id: string;
  userId: string;
  itemId: string;
  price: number;
  quantity: number;
  totalAmount: number;
  createdAt: Date;
  updatedAt: Date;
}

const TransactionSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  itemId: { type: Schema.Types.ObjectId, ref: "Item", required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now},
  updatedAt: { type: Date, default: Date.now}
});

const Transaction = mongoose.model<ITransaction>("Item", TransactionSchema);

export default Transaction;