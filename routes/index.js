const stateRoutes = require("./admin/stateRoutes");
const productRoutes = require("./shop/productRoutes");
const categoryRoutes = require("./shop/categoryRoutes");
const userRoutes = require("./shop/userRoutes");

module.exports = (app) => {
  app.use(stateRoutes);
  app.use(productRoutes);
  app.use(categoryRoutes);
  app.use(userRoutes);
};
