const express = require("express");
const imageRouter = express.Router();
const uploadImage = require("../../middlewares/imageUpload");

const { show, store, destroy } = require("../../controllers/admin/imageController");

imageRouter.get("/images", show);
imageRouter.post("/images", uploadImage.single("image"), store);
imageRouter.delete("/images/:id", destroy);

module.exports = imageRouter;
