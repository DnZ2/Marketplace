const { Schema, model } = require("mongoose");

const Category = new Schema({
  value: { type: String, unique: true },
});

module.exports = model("Category", Category);
