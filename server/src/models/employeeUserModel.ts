import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  _id: string;
  username: string;
  organisationId: string;
  password: string;
  allowedToSell: boolean;
  role: string;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: true },
  organisationId: { type: String, required: true },
  password: { type: String, required: true },
  allowedToSell: { type: Boolean, required: true, default: false },
  master: {type: Boolean, required: true, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const EmployeeUser = mongoose.model<IUser>("EmployeeUser", UserSchema);

export default EmployeeUser;