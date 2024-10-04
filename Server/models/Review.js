const { Schema, model } = require("mongoose");

const Review = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  productId: { type: Schema.Types.ObjectId, ref: "Product" },
  reviewText: { type: String },
  rating: { type: Number, required: true },
  createdAt: { type: Number, default: Date.now() },
});

module.exports = model("Review", Review);
