const { Sequelize, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: hack_academy_db
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    logging: false, // Para que no aparezcan mensajes en consola.
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
};
