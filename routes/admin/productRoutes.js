const express = require("express");
const productRouter = express.Router();

const { show, store, update, destroy } = require("../../controllers/admin/productController");

productRouter.get("/products", show);
productRouter.post("/products/:id", store);
productRouter.put("/products/:id", update);
productRouter.delete("/products/:id", destroy);

module.exports = productRouter;
