const { Schema, model } = require("mongoose");

const Order = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: "User" },
  products: [
    {
      productId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Product",
      },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true },
    },
  ],
  address: { type: String },
  paymentAmount: { type: Number, required: true },
  createdAt: { type: Number, default: Date.now() },
  returnLink: { type: String },
  isReturned: { type: Boolean, default: false },
  isPayment: { type: Boolean, default: false },
});

module.exports = model("Order", Order);
