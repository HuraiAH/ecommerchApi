const Category = require("../../models/category.models");
// create new category
exports.createCategory = (req, res) => {
  try {
    const { categoryName } = req.body;
    let categoryData = new Category({ categoryName });
    categoryData.save();
    console.log(categoryData);
    res.status(200).json(categoryData);
  } catch (error) {
    console.log("do not save category data!");
  }
};
// find category
exports.findCategory = async (req, res) => {
  try {
    let CategoryData = await Category.find();
    console.log(CategoryData);
    res.status(200).json(CategoryData);
  } catch (error) {
    console.log("category data not found");
  }
};
// delete category

exports.deleteSingleCategory = async (req, res) => {
  try {
    let { id } = req.params;
    let deletedData = await Category.findOneAndDelete({ _id: id });
    res.json(deletedData);
    console.log("data deleted successful");
  } catch (error) {
    console.log("data not found");
  }
};
