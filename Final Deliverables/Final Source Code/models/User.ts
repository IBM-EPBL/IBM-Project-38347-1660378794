import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userModel = new Schema(
  {
    Email: { type: String, required: true },
    Name: { type: String, required: true },
    Password: { type: String, required: true },
    Timber: { type: Number },
    Cloth: { type: Number },
    Toys: { type: Number },
    Electronics: { type: Number },
    Drinks: { type: Number },
    Food: { type: Number },
    RequestedStocks: [
      {
        StockId: { type: String },
      },
    ],
    currentOrders: [
      {
        StockId: { type: String },
      },
    ],
    DateWiseDemand: [
      {
        date: Date,
        amount: {
          Timber: { type: Number },
          Cloth: { type: Number },
          Toys: { type: Number },
          Electronics: { type: Number },
          Drinks: { type: Number },
          Food: { type: Number },
        },
      },
    ],
    admin: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.models.User || mongoose.model("User", userModel);
