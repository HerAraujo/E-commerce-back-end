module.exports = (sequelize, Model, DataTypes) => {
  class OrderLine extends Model {}

  OrderLine.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      orderedProduct: {
        type: DataTypes.JSON,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      amount: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "orderLine",
    },
  );

  return OrderLine;
};
