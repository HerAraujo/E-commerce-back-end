const { User } = require("../models");

module.exports = async () => {
  const users = [
    {
      firstname: "Jack",
      lastname: "Johnson",
      email: "mj@gmail.com",
      password: "encrypted-password",
      phone: "3657896",
    },
    {
      firstname: "Norah",
      lastname: "Jones",
      email: "mj@gmail.com",
      password: "encrypted-password",
      phone: "3657896",
    },
  ];

  await User.bulkCreate(users);
};
