const Product = require("../../models/product.models");

// create products
exports.createProduct = (req, res) => {
  try {
    let { productName, description, usPrice, bdPrice, stock, Owner } = req.body;
    let products = new Product({
      productName,
      description,
      usPrice,
      bdPrice,
      stock,
      Owner,
    });
    products.save();
    console.log(products);
    res.status(200).json(products);
  } catch (error) {
    console.log("product not created!");
  }
};
// find all products
exports.findAllProduct = async (req, res) => {
  try {
    let allProducts = await Product.find();
    console.log(allProducts);
    res.status(200).json(allProducts);
  } catch (error) {
    console.log("product data not found");
  }
};
// find single product
exports.findSingleProduct = async (req, res) => {
  try {
    let { id } = req.params;
    let product = await Product.findById(id);
    console.log(product);
    res.status(200).json(product);
  } catch (error) {
    console.log("product not found!");
  }
};
// update products
exports.updateProducts = async (req, res) => {
  try {
    let { id } = req.params;
    let { productName, description, usPrice, bdPrice, stock, Owner } = req.body;
    let updatedProducts = await Product.findOneAndUpdate(
      { _id: id },
      { $set: { productName, description, usPrice, bdPrice, stock, Owner } },
      { new: true }
    );
    console.log("data updated successful");
    res.json(updatedProducts);
  } catch (error) {
    console.log("data not found");
  }
};

// delete products
exports.deleteSingleProducts = async (req, res) => {
  try {
    let { id } = req.params;
    let deletedData = await Product.findOneAndDelete({ _id: id });
    res.json(deletedData);
    console.log("data deleted successful");
  } catch (error) {
    console.log("data not found");
  }
};
