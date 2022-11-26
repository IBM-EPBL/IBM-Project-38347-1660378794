import mongoose from "mongoose";
const Schema = mongoose.Schema;

const StockModel = new Schema(
  {
    Title: { type: String, required: true },
    email: { type: String, required: true },
    count: { type: Number, required: true },
    type: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.models.Stock || mongoose.model("Stock", StockModel);
