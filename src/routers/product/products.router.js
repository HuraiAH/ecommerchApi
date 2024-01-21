const router = require("express").Router();

let {
  createProduct,
  findAllProduct,
  findSingleProduct,
  updateProducts,
  deleteSingleProducts,
} = require("../../controllers/products/product.controller");

router.post("/products", createProduct);
router.get("/products", findAllProduct);
router.get("/p/:id", findSingleProduct);
router.put("/p/:id", updateProducts);
router.delete("/p/:id", deleteSingleProducts);

module.exports = router;
