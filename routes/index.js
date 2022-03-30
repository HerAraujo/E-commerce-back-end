//admin
const adminProductRoutes = require("./admin/productRoutes");
const adminStateRoutes = require("./admin/stateRoutes");
const adminCategoryRoutes = require("./admin/categoryRoutes");
const adminAdminRoutes = require("./admin/adminRoutes");
const adminImageRoutes = require("./admin/imageRoutes");
const adminOrderRoutes = require("./admin/orderRoutes");

//shop
const productRoutes = require("./shop/productRoutes");
const categoryRoutes = require("./shop/categoryRoutes");
const userRoutes = require("./shop/userRoutes");

module.exports = (app) => {
  app.use("/admin", adminStateRoutes);
  app.use("/admin", adminProductRoutes);
  app.use("/admin", adminCategoryRoutes);
  app.use("/admin", adminAdminRoutes);
  app.use("/admin", adminImageRoutes);
  app.use("/admin", adminOrderRoutes);

  app.use(productRoutes);
  app.use(categoryRoutes);
  app.use(userRoutes);
};
