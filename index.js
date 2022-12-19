require("dotenv").config();
const express = require("express");
const app = new express();
const cors = require("cors");
const { connectDB } = require("./config/connect");
const port = process.env.DB_PORT || 8000;

// all routes
const product = require("./routes/product");

// middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use("/products", product);

// connect with database
connectDB();

app.get("/", (req, res) =>
  res.status(201).send("Hello world! This is Express Home Page!")
);
app.listen(port, () => console.log(`localhost:${5000}`));
