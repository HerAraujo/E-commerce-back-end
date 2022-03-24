const { OrderStatus } = require("../models");

module.exports = async () => {
  const orderStatuses = [
    {
      name: "PENDING",
    },
    {
      name: "CONFIRMED",
    },
    {
      name: "ON-WAY",
    },
    {
      name: "DELIVERED",
    },
  ];

  await OrderStatus.bulkCreate(orderStatuses);
};
