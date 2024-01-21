const { Schema, model, default: mongoose } = require("mongoose");

const OrderItemSchema = new Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    orderCustomer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItem: { type: [OrderItemSchema] },
    address: {
      type: String,
      required: true,
    },
    orderStatus: {
      type: String,
      enum: ["pending", "cancelled", "delivered"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Order = model("Order", orderSchema);
module.exports = Order;
