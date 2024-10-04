const { Schema, model } = require("mongoose");

const User = new Schema({
  username: { type: String },
  address: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Address",
  },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  roles: [{ type: String, ref: "Role", default: "USER" }],
  isActivated: { type: Boolean, default: false },
  activationLink: { type: String },
});

module.exports = model("User", User);
