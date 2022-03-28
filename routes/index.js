//admin
const adminProductRoutes = require("./admin/productRoutes");
const adminStateRoutes = require("./admin/stateRoutes");
const adminAdminRoutes = require("./admin/adminRoutes");

//shop
const productRoutes = require("./shop/productRoutes");
const categoryRoutes = require("./shop/categoryRoutes");
const userRoutes = require("./shop/userRoutes");

module.exports = (app) => {
  app.use("/admin", adminStateRoutes);
  app.use("/admin", adminProductRoutes);
  app.use("/admin", adminAdminRoutes);

  app.use(productRoutes);
  app.use(categoryRoutes);
  app.use(userRoutes);
};
