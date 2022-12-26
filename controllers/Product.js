const { mongoose } = require("mongoose");
const { Products } = require("../models/productSchema");

// get all api
const getProduct = async (req, res) => {
  try {
    const getApi = await Products.find({});
    res.status(201).json(getApi);
  } catch (error) {
    console.log(error);
  }
};

// get single api
const singleApi = async (req, res) => {
  try {
    const _id = req.params._id;
    const query = { _id };
    const singleApi = await Products.findOne(query);
    res.status(201).json(singleApi);
  } catch (error) {
    console.log(error);
  }
};

// post data

const addProduct = async (req, res) => {
  try {
    const productData = new Products(req.body);
    const result = await productData.save();
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
};
// post data

const updateProduct = async (req, res) => {
  try {
    const _id = req.params._id;
    const query = {_id: mongoose.Types.ObjectId(_id)};
    const updateDoc = {$set:req.body};
    const option = {upsert:true};
    const result = await Products.findOneAndUpdate(query,updateDoc,option);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
};
// post data

const deleteProduct = async (req, res) => {
  try {
    const _id = req.params._id;
    const query = {_id: mongoose.Types.ObjectId(_id)};
    const result = await Products.findOneAndDelete(query);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  addProduct,
  getProduct,
  singleApi,
  updateProduct,
  deleteProduct,
};
