const ShopOWner = require("../../models/ShopOwner.models");
// create new document controller
exports.createOwner = async (req, res) => {
  let { ownerName, shopName, address } = req.body;
  //   let newShop = new ShopOWner({ ownerName, shopName, address });
  //   newShop.save();
  let newShop = await ShopOWner.create({ ownerName, shopName, address });
  console.log(newShop);
  res.status(201).json(newShop);
};
// find single document controller
exports.findSingleOwner = async (req, res) => {
  try {
    let { id } = req.params;

    let shopOwner = await ShopOWner.find(id);
    console.log(shopOwner);
    res.status(200).json(shopOwner);
  } catch (error) {
    console.log(`error occurred`);
  }
};
// update document controller
exports.updateOwner = async (req, res) => {
  try {
    let { id } = req.params;
    let { ownerName, shopName, address } = req.body;

    let updatedOwner = await ShopOWner.findByIdAndUpdate(
      id,
      {
        $set: { ownerName, shopName, address },
      },
      { new: true }
    );
    console.log("data updated successfully!");
    res.json(updatedOwner);
  } catch (error) {
    console.log("data update failed!");
  }
};
// delete document controller
exports.deleteOwner = async (req, res) => {
  try {
    let { id } = req.params;
    let deletedOwner = await ShopOWner.findByIdAndDelete({ _id: id });
    res.json(deletedOwner);
    console.log("data deleted successfully!");
  } catch (error) {
    console.log("data not found!");
  }
};
