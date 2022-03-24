module.exports = (sequelize, Model, DataTypes) => {
  class State extends Model {}

  State.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "confirmed",
      },
    },
    {
      sequelize,
      modelName: "state",
    },
  );

  return State;
};
