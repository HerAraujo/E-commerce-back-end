const express = require("express");
const productRouter = express.Router();

const { showFeaturedProducts, showProduct } = require("../../controllers/shop/productController");

productRouter.get("/featured-products", showFeaturedProducts);
productRouter.get("/products/:id", showProduct);

module.exports = productRouter;