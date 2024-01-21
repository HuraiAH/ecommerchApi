const Order = require("../../models/order.models");
// create new order
exports.createOrder = (req, res) => {
  try {
    let { orderPrice, orderCustomer, orderItem, address, orderStatus } =
      req.body;
    let newOrders = new Order({
      orderItem,
      orderPrice,
      orderCustomer,
      address,
      orderStatus,
    });
    newOrders.save();
    console.log(newOrders);
    res.status(201).json(newOrders);
  } catch (error) {
    console.log("order not created!");
  }
};
// find a single order
exports.findSingleOrder = async (req, res) => {
  try {
    let { id } = req.params;
    let order = await Order.findById(id);
    console.log(order);
    res.status(200).json(order);
  } catch (error) {
    console.log("order not found!");
  }
};
// update order information
exports.updateOrder = async (req, res) => {
  try {
    let { id } = req.params;
    let { orderPrice, orderCustomer, orderItem, address, orderStatus } =
      req.body;
    let updatedOrder = await Order.findOneAndUpdate(
      { _id: id },
      { $set: { orderPrice, orderCustomer, orderItem, address, orderStatus } },
      { new: true }
    );
    console.log("data updated successful");
    res.json(updatedOrder);
  } catch (error) {
    console.log("data not found");
  }
};
// delete order controller
exports.deleteSingleOrder = async (req, res) => {
  try {
    let { id } = req.params;
    let deletedData = await Order.findOneAndDelete({ _id: id });
    res.json(deletedData);
    console.log("data deleted successful");
  } catch (error) {
    console.log("data not found");
  }
};
