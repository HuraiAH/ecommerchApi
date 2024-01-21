const router = require("express").Router();

const {
  createOrder,
  findSingleOrder,
  updateOrder,
  deleteSingleOrder,
} = require("../../controllers/order/order.controller");

router.post("/order", createOrder);
router.get("/o/:id", findSingleOrder);
router.put("/o/:id", updateOrder);
router.delete("/o/:id", deleteSingleOrder);

module.exports = router;
