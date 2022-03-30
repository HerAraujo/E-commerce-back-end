//no remove (change status)
const express = require("express");
const orderRouter = express.Router();

const { show } = require("../../controllers/admin/orderController");

orderRouter.get("/order", show);

module.exports = orderRouter;
