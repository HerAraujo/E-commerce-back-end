module.exports = (sequelize, Model, DataTypes) => {
  class Image extends Model {}

  Image.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "image",
    },
  );

  return Image;
};
