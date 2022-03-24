const express = require("express");
const stateRouter = express.Router();

const { show, store, update, destroy } = require("../../controllers/admin/stateController");

stateRouter.get("/states", show);
stateRouter.post("/states", store);
stateRouter.put("/states", update);
stateRouter.delete("/states", destroy);

module.exports = stateRouter;
