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
const OrderStatus = require("./OrderStatus")(sequelize, Model, DataTypes);
const Image = require("./Image")(sequelize, Model, DataTypes);
const OrderLine = require("./OrderLine")(sequelize, Model, DataTypes);
const Admin = require("./Admin")(sequelize, Model, DataTypes);

Product.hasMany(Category);
Product.hasMany(Image);
Category.belongsTo(Product);
Image.belongsTo(Product);

User.hasMany(Address);
Address.belongsTo(User);
User.hasMany(Order);
Order.belongsTo(User);

OrderStatus.hasMany(Order);
Order.belongsTo(OrderStatus);

Order.hasMany(OrderLine);
OrderLine.belongsTo(Order);

module.exports = {
  sequelize,
  Category,
  Product,
  Address,
  Order,
  OrderStatus,
  Image,
  OrderLine,
  Admin,
  User,
};
