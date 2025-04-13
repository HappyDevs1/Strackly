import mongoose, { Document, Schema } from "mongoose";

export interface IMaster extends Document {
  _id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  allowedToSell: boolean;
  master: string;
  createdAt: Date;
  updatedAt: Date;
}

const MasterUserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  allowedToSell: { type: Boolean, required: true, default: true },
  master: { type: Boolean, required: true, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const MasterUser = mongoose.model<IMaster>("MasterUser", MasterUserSchema);

export default MasterUser;