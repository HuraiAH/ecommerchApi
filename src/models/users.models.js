const { Schema, model } = require("mongoose");
// const generator = require("generate-password");
// let password = generator.generate({
//   length: 10,
//   numbers: true,
// });
// import mongoose from "mongoose";

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
      minLength: 3,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: { type: Number, required: true },
  },
  { timestamps: true }
);

const User = new model("User", UserSchema);
module.exports = User;
