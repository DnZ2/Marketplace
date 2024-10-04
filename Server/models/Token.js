const { Schema, model } = require("mongoose");

const Token = new Schema({
  user: { type: Schema.Types.ObjectId, unique: true, ref: "User" },
  refreshToken: { type: String, required: true },
});

module.exports = model("Token", Token);
