require("dotenv").config();
// router handler
const userRoute = require("./routers/userRouter/userRouter");
const categoryRoute = require("./routers/category/category.router");
const productsRoute = require("./routers/product/products.router");
const shopOwnerRoute = require("./routers/shopOwner/shopOwner.router");
const orderRoute = require("./routers/order/order.router");

const express = require("express");
// import { express } from "express";
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
//port number
let port = process.env.PORT || 4000;
//middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

// database uri
let uri = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASSWORD}@cluster0.is3mb9r.mongodb.net/`;

mongoose
  .connect(uri)
  .then(() => {
    app.use(userRoute);
    app.use(categoryRoute);
    app.use(productsRoute);
    app.use(shopOwnerRoute);
    app.use(orderRoute);
    app.get("*", (req, res) => {
      res.send("404 not found!");
    });
    app.listen(port, () => {
      console.log("database connection successful");
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(`${err.massage} database note connect!`);
  });
