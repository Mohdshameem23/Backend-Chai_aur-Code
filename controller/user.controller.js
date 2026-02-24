// import User from "../controller/user.controller.js"
// import cloudinary from "../config/cloudinary.js";
// import fs from "fs";
// import bcrypt from "bcrypt";

// 🔹 Register User
const User=require('../models/user.model');
const cloudinary=require('../config/cloudinary');
const fs=require('fs');
const bcrypt=require('bcrypt')
     const registerUser = async (req, res) => {
      console.log('register user')
  try {
    const { userName,fullName, email, password } = req.body;
    console.log(fullName)

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    let imageData = {};
console.log(req.file)
let avatarUrl="";
    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      avatarUrl=result.secure_url;
// console.log(imageData)
      // delete local file
      fs.unlinkSync(req.file.path);
    }

    const user = await User.create({
      userName,
      fullName,
      email,
      password: hashedPassword,
      avatar:avatarUrl
    });

    res.status(201).json({
      message: "User Registered Successfully",
      user,
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports={registerUser};