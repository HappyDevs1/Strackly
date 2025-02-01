import mongoose, { Document, Schema } from "mongoose";

export interface IItem extends Document {
  _id: string;
  name: string;
  price: number;
  stockQuantity: number;
  picture: string
  createdAt: Date;
  updatedAt: Date;
}

const ItemSchema: Schema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  stockQuantity: { type: Number, required: true, default: 0 },
  picture: { type: String, required: true },
  createdAt: { type: Date, default: Date.now},
  updatedAt: { type: Date, default: Date.now}
});

const Item = mongoose.models.Item || mongoose.model<IItem>("Item", ItemSchema);

export default Item;