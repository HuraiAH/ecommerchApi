const router = require("express").Router();
const {
  createOwner,
  findSingleOwner,
  updateOwner,
  deleteOwner,
} = require("../../controllers/shopOwner/shopOwner.controller");

router.post("/shopOwner", createOwner);
router.get("/shopOwner", findSingleOwner);
router.put("/owner/:id", updateOwner);
router.delete("/owner/:id", deleteOwner);

module.exports = router;
