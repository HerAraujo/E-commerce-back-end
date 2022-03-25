const express = require("express");
const categoryRouter = express.Router();

const { show } = require("../../controllers/shop/categoryController");

categoryRouter.get("/category/:slug", show);

module.exports = categoryRouter;
