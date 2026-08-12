const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://tapon_user:Sridhar070@cluster0.fgtcgdp.mongodb.net/?appName=Cluster0");

const User = mongoose.model("User", {
//   regd: dooble,
  name: String,
  email: String,
  password: String
});

app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  await user.save();

  res.json({ message: "User registered successfully" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});