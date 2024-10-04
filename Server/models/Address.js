const { Schema, model } = require("mongoose");

const Address = new Schema({
  city: { type: String, required: true },
  district: { type: String, required: true },
  street: { type: String, required: true },
  building: { type: String, required: true },
  floor: { type: String },
  apartment: { type: String },
});

module.exports = model("Address", Address);
