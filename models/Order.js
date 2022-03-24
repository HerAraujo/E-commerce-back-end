module.exports = (sequelize, Model, DataTypes) => {
  class Order extends Model {}

  Order.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      address: {
        type: DataTypes.JSON,
        allowNull: false,
      },

      products: {
        type: DataTypes.JSON, //[{ id: 10, price: 890.99, quantity: 4 }, { id: 11, price: 990.99, quantity: 4 },]
      },
      // total: {
      //   type: DataTypes.DECIMAL,
      //   allowNull: false,
      // },
    },
    {
      sequelize,
      modelName: "order",
    },
  );

  return Order;
};
