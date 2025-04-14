import mongoose, { Document, Schema } from "mongoose";

export interface IEmployee extends Document {
  _id: string;
  organisation: mongoose.ObjectId;
  username: string;
  password: string;
  allowedToSell: boolean;
  master: string;
  createdAt: Date;
  updatedAt: Date;
}

const EmployeeUserSchema: Schema = new Schema({
  organisation: { type: mongoose.Schema.Types.ObjectId, ref: "Organisation" },
  username: { type: String, required: true },
  password: { type: String, required: true },
  allowedToSell: { type: Boolean, required: true, default: false },
  master: {type: Boolean, required: true, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const EmployeeUser = mongoose.model<IEmployee>("EmployeeUser", EmployeeUserSchema);

export default EmployeeUser;