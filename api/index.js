const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();
const port = 3001;

app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5174",
  })
);

mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.json("Hello World!");
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  res.json({ name, email, password });
});

app.listen(port);
