// import upload from "../middleware/multer.js";
const upload=require('../middleware/multer.js')
const express=require('express');
const router=express.Router();
const {registerUser}=require('../controller/user.controller')
router.post('/register',upload.single("profileImage"),registerUser);
module.exports=router;