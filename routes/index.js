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
  app.use("/admin", adminAdminRoutes); //check jwt (except login)
  app.use("/admin", adminCategoryRoutes); //already protected by checked on admin
  app.use("/admin", adminImageRoutes); //already protected by checked on admin
  app.use("/admin", adminStatusRoutes); //already protected by checked on admin

  app.use("/admin", adminProductRoutes);

  app.use("/admin", adminOrderRoutes);

  app.use(productRoutes);
  app.use(categoryRoutes);
  app.use(userRoutes);
  app.use(orderRoutes);
};
