// const { ObjectId } = require("mongodb");
const User = require("../../models/users.models");

// create new user
exports.createUsers = (req, res) => {
  try {
    let { userName, email, password } = req.body;
    let users = new User({
      userName,
      email,
      password,
    });
    users.save();
    console.log(users);
    res.json(users);
  } catch (error) {
    console.log(error.massage);
  }
};
// find all users
exports.findAllUsers = async (req, res) => {
  try {
    let allUsers = await User.find();
    console.log(allUsers);
    res.status(200).json(allUsers);
  } catch (error) {
    console.log(error.massage);
  }
};

// findUser by id
exports.getSingleUsersById = async (req, res) => {
  try {
    let { id } = req.params;
    let singleData = await User.findById(id);
    console.log("data found");
    res.status(200).json(singleData);
  } catch (error) {
    console.log("data not found");
  }
};

// update single user by id
exports.updateSingleContactsById = async (req, res) => {
  try {
    let { id } = req.params;
    let { userName, email, password } = req.body;
    let updatedData = await User.findOneAndUpdate(
      { _id: id },
      { $set: { userName, email, password } },
      { new: true }
    );
    console.log("data updated successful");
    res.json(updatedData);
  } catch (error) {
    console.log("data not found");
  }
};
// delete single user by id
exports.deleteSingleUserById = async (req, res) => {
  try {
    let { id } = req.params;
    let deletedData = await User.findOneAndDelete({ _id: id });
    res.json(deletedData);
    console.log("data deleted successful");
  } catch (error) {
    console.log("data not found");
  }
};

// delete user by user name
exports.deleteSingleUserByUserName = async (req, res) => {
  try {
    let { userName } = req.params.userName;
    let deletedData = await User.findOneAndDelete({ userName: userName });
    console.log("data deleted successful");
    res.json(deletedData);
  } catch (error) {
    console.log("data not found");
  }
};
