const express = require("express");
const connect = require("./db/connectDB");

const app = express();
const userRoutes=require('./routes/user.routes');
app.use('/api/v1/user',userRoutes);
require("dotenv").config();
connect();
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
app.get("/", (req, res) => {
  res.send("Api is working");
});
