const express = require("express");
const connect = require("./db/connectDB");
const app = express();
require('dotenv').config()
app.use(express.json());
const fs=require('fs');
if(!fs.existsSync("uploads")){
  fs.mkdirSync("uploads");
}
const userRoutes = require("./routes/user.routes");
app.use("/api/v1/users", userRoutes);
connect();
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
app.get("/", (req, res) => {
  res.send("Api is working");
});

