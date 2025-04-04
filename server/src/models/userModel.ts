import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  _id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  allowedToSell: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
  allowedToSell: { type: Boolean, required: true, default: false },
  createdAt: { type: Date, default: Date.now},
  updatedAt: { type: Date, default: Date.now}
});

const User = mongoose.model<IUser>("User", UserSchema);

export default User;