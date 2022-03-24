const { Admin } = require("../models");

module.exports = async () => {
  const admins = [
    {
      firstname: "admin",
      lastname: "admin",
      email: "admin@gmail.com",
      password: "encrypted-password",
    },
  ];

  await Admin.bulkCreate(admins);
};
