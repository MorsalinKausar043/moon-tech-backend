require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database connected successfully");
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { connectDB };
