const express = require("express");
const userRouter = express.Router();

const { store, login } = require("../../controllers/shop/userController");

userRouter.post("/users", store);
userRouter.post("/tokens", login);

module.exports = userRouter;
