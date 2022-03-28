const express = require("express");
const adminRouter = express.Router();

const { show, store, destroy, update } = require("../../controllers/admin/adminController");

adminRouter.get("/", show);

adminRouter.post("/", store);

adminRouter.delete("/:id", destroy);

adminRouter.patch("/:id", update);

module.exports = adminRouter;
