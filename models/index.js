const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_CONNECTION,
    logging: false,
  },
);

const Category = require("./Category")(sequelize, Model, DataTypes);
const Product = require("./Product")(sequelize, Model, DataTypes);
const User = require("./User")(sequelize, Model, DataTypes);
const Address = require("./Product")(sequelize, Model, DataTypes);
const Order = require("./Product")(sequelize, Model, DataTypes);
const State = require("./State")(sequelize, Model, DataTypes);
const Admin = require("./Admin")(sequelize, Model, DataTypes);

Category.hasMany(Product);
Product.belongsTo(Category);
User.hasMany(Address);
User.hasMany(Order);
Address.belongsTo(User);
Order.belongsTo(User);
State.hasMany(Order);
Order.belongsTo(State);
Order.belongsTo(Address);
Address.hasMany(Order);
Order.hasMany(Product);
Product.belongsTo(Order);

module.exports = {
  sequelize,
  Category,
  Product,
  Address,
  Order,
  State,
  Admin,
  User,
};
