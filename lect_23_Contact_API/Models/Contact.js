import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: { type: String, require: true },
  phone: { type: String, require: true },
  type: {type:String,require:true},
  createdAt: { type: Date, default: Date.now },
  user : {type:mongoose.Schema.Types.ObjectId}
});

export const Contact = mongoose.model("Contacts", contactSchema);