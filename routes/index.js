const stateRoutes = require("./admin/stateRoutes");

module.exports = (app) => {
  app.use(stateRoutes);
};
