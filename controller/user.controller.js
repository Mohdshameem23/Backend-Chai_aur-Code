// import User from "../controller/user.controller.js"
// import cloudinary from "../config/cloudinary.js";
// import fs from "fs";
// import bcrypt from "bcrypt";

// 🔹 Register User
const User=require('../controller/user.controller.js');
const cloudinary=require('cloudinary');
const fs=require('fs');
const bcrypt=require('bcrypt')
     const registerUser = async (req, res) => {
  try {
    const {userName, fullName, email, password } = req.body;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    let imageData = {};

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);

      imageData = {
        url: result.secure_url,
        public_id: result.public_id,
      };

      // delete local file
      fs.unlinkSync(req.file.path);
    }

    const user = await User.create({
      userName,
      fullName,
      email,
      password: hashedPassword,
      profileImage: imageData,
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