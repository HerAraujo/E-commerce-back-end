const express = require("express");
const imageRouter = express.Router();

const { show, store, update, destroy } = require("../../controllers/admin/imageController");

imageRouter.get("/images", show);
imageRouter.post("/images", store);
imageRouter.patch("/images/:id", update);
imageRouter.delete("/images/:id", destroy);

module.exports = imageRouter;
