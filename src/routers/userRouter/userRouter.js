const router = require("express").Router();
const {
  createUsers,
  findAllUsers,
  getSingleUsersById,
  updateSingleContactsById,
  deleteSingleUserById,
  deleteSingleUserByUserName,
} = require("../../controllers/users/user.controller");

router.post("/users", createUsers);
router.get("/users", findAllUsers);
router.get("/u/:id", getSingleUsersById);
router.put("/u/:id", updateSingleContactsById);
router.delete("/u/:id", deleteSingleUserById);
router.delete("/u/:userName", deleteSingleUserByUserName);

module.exports = router;
