const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const productSchema = new Schema({
  model: {
    type: String,
  },
  brand: {
    type: String,
  },
  email: {
    type: String,
    default: new Date().getMilliseconds(),
  },
  phone: {
    type: String,
    default: new Date().getSeconds(),
  },
  image: {
    type: String,
  },
  status: {
    type: Boolean,
  },
  keyFeature: {
    type: Array,
  },
  spec: {
    type: Array,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

const Products = mongoose.model("Products", productSchema);

module.exports = { Products };
