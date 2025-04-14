import mongoose, { Document, mongo, Schema } from "mongoose";

export interface IOrganisation extends Document {
  _id: string;
  organisationName: string;
  organisationAddress: string;
  organisationPhone: number;
  organisationEmail: string;
  masterUser: mongoose.ObjectId;
  employees: mongoose.ObjectId[];
  products: mongoose.ObjectId[];
  transations: mongoose.ObjectId[];
  revenue: number;
  createdAt: Date;
  updatedAt: Date;
}

const OrganisationSchema: Schema = new Schema({
  organisationName: { type: String, required: true },
  organisationAddress: { type: String, required: true },
  organisationPhone: { type: Number, default: 0 },
  organisationEmail: { type: String, required: true },
  masterUser: { type: mongoose.Schema.Types.ObjectId, ref: "MasterUser" },
  employees: [{ type: mongoose.Schema.Types.ObjectId, ref: "EmployeeUser"}],
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Item" }],
  transaction: [{ type: mongoose.Schema.Types.ObjectId, ref: "Transaction" }],
  revenue: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now},
  updatedAt: { type: Date, default: Date.now}
});

const Organisation = mongoose.model<IOrganisation>("Organisation", OrganisationSchema);

export default Organisation;