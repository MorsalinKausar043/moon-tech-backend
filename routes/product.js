const express = require('express');
const router = express.Router();
const { getProduct, addProduct, singleApi, updateProduct, deleteProduct } = require('../controllers/Product');

// get data 
router.get("/", getProduct);
// get single data 
router.get("/:_id", singleApi)
// add data 
router.post("/", addProduct);
// add update 
router.patch("/:_id", updateProduct)
// add delete 
router.delete("/:_id", deleteProduct);

// export data 
module.exports = router;