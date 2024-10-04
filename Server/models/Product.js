const { Schema, model } = require("mongoose");

const Product = new Schema({
  title: { type: String, unique: true, required: true },
  description: { type: String },
  discount: { type: Number },
  price: { type: Number, required: true },
  stockPrice: { type: Number, required: true },
  maxQuantity: { type: Number, required: true },
  category: { type: String, required: true, ref: "Category" },
  rating: {
    type: Object,
    default: {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
    },
  },
  createdAt: { type: Number, default: Date.now() },
});

module.exports = model("Product", Product);
