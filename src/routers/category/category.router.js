const router = require("express").Router();

let {
  createCategory,
  findCategory,
  deleteSingleCategory,
} = require("../../controllers/category/category.controller");
// CRUD operation
router.post("/category", createCategory);
router.get("/category", findCategory);
router.delete("/category/:id", deleteSingleCategory);

module.exports = router;
