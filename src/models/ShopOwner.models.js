const { Schema, model } = require("mongoose");
const productOwnerSchema = new Schema({
  ownerName: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
  },
  shopName: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
  },
});
const ProductOwner = model("ProductOwner", productOwnerSchema);
module.exports = ProductOwner;
