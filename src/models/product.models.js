const { Schema, model, mongoose } = require("mongoose");

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    usPrice: {
      type: Number,
      required: false,
    },
    bdPrice: {
      type: Number,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
    Owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductOwner",
    },
  },
  { timestamps: true }
);

const Product = model("Product", productSchema);
module.exports = Product;
