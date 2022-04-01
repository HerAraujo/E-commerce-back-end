const express = require("express");
const orderRoutes = express.Router();

const { show, showOne, store, destroy } = require("../../controllers/shop/orderController");

orderRoutes.get("/order/", show);

orderRoutes.post("/order", store);

orderRoutes.delete("/order/:id", destroy);

orderRoutes.get("/order/:id", showOne);

module.exports = orderRoutes;
