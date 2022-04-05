//admin
const adminProductRoutes = require("./admin/productRoutes");
const adminStatusRoutes = require("./admin/statusRoutes");
const adminCategoryRoutes = require("./admin/categoryRoutes");
const adminAdminRoutes = require("./admin/adminRoutes");
const adminImageRoutes = require("./admin/imageRoutes");
const adminOrderRoutes = require("./admin/orderRoutes");

//shop
const productRoutes = require("./shop/productRoutes");
const categoryRoutes = require("./shop/categoryRoutes");
const userRoutes = require("./shop/userRoutes");
const orderRoutes = require("./shop/orderRoutes");

module.exports = (app) => {
  app.use("/admin", adminStatusRoutes);
  app.use("/admin", adminProductRoutes);
  app.use("/admin", adminCategoryRoutes);
  app.use("/admin", adminImageRoutes);
  app.use("/admin", adminOrderRoutes);
  app.use("/admin", adminAdminRoutes); //already protected

  app.use(productRoutes);
  app.use(categoryRoutes);
  app.use(userRoutes);
  app.use(orderRoutes);
};
