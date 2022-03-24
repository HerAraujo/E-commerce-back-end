const { Order } = require("../models");

module.exports = async () => {
  const orders = [
    {
      address: {
        street: "4th Avenue",
        portNumber: "4321",
        apartmentNumber: "1005",
        city: "New York",
      },
      products: [
        { id: 1, name: "Pils Munich", price: "5", quantity: 2 },
        { id: 3, name: "Bock Rotterdam", price: "3", quantity: 6 },
        { id: 6, name: "Ale Lisburn", price: "4", quantity: 4 },
      ],

      userId: 1,
    },

    {
      address: {
        street: "Brick Lane",
        portNumber: "2560",
        city: "London",
      },
      products: [
        { id: 4, name: "Stout Mons", price: "8", quantity: 6 },
        { id: 3, name: "Bock Rotterdam", price: "3", quantity: 6 },
      ],

      userId: 2,
    },
  ];

  await Order.bulkCreate(orders);
};
