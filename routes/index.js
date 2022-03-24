const stateRoutes = require("./admin/stateRoutes");
const productRoutes = require("./shop/productRoutes");

module.exports = (app) => {
  app.use(stateRoutes);
  app.use(productRoutes);
};
