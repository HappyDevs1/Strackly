import mongoose, { Document, Schema } from "mongoose";

export interface IItem extends Document {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  transactions: Array<any>;
  createdAt: Date;
  updatedAt: Date;
}

const ItemSchema: Schema = new Schema({
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true, default: 0 },
  transactions: { type: Array, default: []},
  createdAt: { type: Date, default: Date.now},
  updatedAt: { type: Date, default: Date.now}
});

const Item = mongoose.model<IItem>("Item", ItemSchema);

export default Item;