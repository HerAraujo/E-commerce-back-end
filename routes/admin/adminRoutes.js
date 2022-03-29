const express = require("express");
const adminRouter = express.Router();

const {
  login,
  show,
  store,
  destroy,
  update,
  showAdmin,
} = require("../../controllers/admin/adminController");

adminRouter.get("/", show);

adminRouter.post("/", store);

adminRouter.get("/admin/:id", showAdmin);

adminRouter.delete("/:id", destroy);

adminRouter.patch("/:id", update);

adminRouter.post("/token", login);

module.exports = adminRouter;
