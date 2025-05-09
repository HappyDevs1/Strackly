import mongoose, { Document, Schema } from "mongoose";
import Organisation from "./organisationModel";

export interface IItem extends Document {
  _id: string;
  organisation: mongoose.ObjectId;
  name: string;
  price: number;
  stockQuantity: number;
  picture: string;
  barcode: string;
  createdAt: Date;
  updatedAt: Date;
}

const ItemSchema: Schema = new Schema({
  organisation: { type: mongoose.Schema.Types.ObjectId, ref: "Organisation", required: true },
  name: { type: String, required: true, unique: true },
  price: { type: Number, required: true },
  stockQuantity: { type: Number, required: true, default: 0 },
  picture: { type: String, required: true },
  barcode: { type: String, default: "0"},
  createdAt: { type: Date, default: Date.now},
  updatedAt: { type: Date, default: Date.now}
});

const Item = mongoose.models.Item || mongoose.model<IItem>("Item", ItemSchema);

export default Item;