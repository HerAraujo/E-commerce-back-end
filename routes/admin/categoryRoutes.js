const express = require("express");
const categoryRouter = express.Router();

const {
  show,
  store,
  update,
  destroy,
  showOne,
} = require("../../controllers/admin/categoryController");

categoryRouter.get("/category", show);
categoryRouter.get("/category/:id", showOne);
categoryRouter.post("/category", store);
categoryRouter.patch("/category/:id", update);
categoryRouter.delete("/category/:id", destroy);

module.exports = categoryRouter;
