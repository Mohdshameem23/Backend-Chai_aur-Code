const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
      trim: true
    },
    fullName: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    avatar: {
      type: String,
      required: true
    },
    coverImage: {
      type: String
    },
    password: {
      type: String,
      required: true
    },
    refreshToken: {
      type: String
    },
   video :[{
type:mongoose.Schema.Types.ObjectId,
ref:'Video'
    }]
  },
  {
    timestamps: true   // ✅ Correct position
  }
);

module.exports = mongoose.model("User", userSchema);