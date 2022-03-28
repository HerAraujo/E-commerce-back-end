const express = require("express");
const productRouter = express.Router();

const { show, store, update, destroy } = require("../../controllers/admin/productController");

productRouter.get("/products", show);
productRouter.post("/products", store);
productRouter.put("/products", update);
productRouter.delete("/products", destroy);

module.exports = productRouter;
