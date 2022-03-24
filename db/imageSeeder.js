const { Image } = require("../models");

module.exports = async () => {
  const images = [
    {
      url: `${process.env.SEEDERS_IMAGES}/lager-1.jpg`,
      name: "lager-1",
    },
    {
      url: `${process.env.SEEDERS_IMAGES}/lager-2.jpg`,
      name: "lager-2",
    },
    {
      url: `${process.env.SEEDERS_IMAGES}/lager-3.jpg`,
      name: "lager-3",
    },
    {
      url: `${process.env.SEEDERS_IMAGES}/red-1.jpg`,
      name: "red-1",
    },
    {
      url: `${process.env.SEEDERS_IMAGES}/red-2.jpg`,
      name: "red-2",
    },
    {
      url: `${process.env.SEEDERS_IMAGES}/dark-1.jpg`,
      name: "dark-1",
    },
    {
      url: `${process.env.SEEDERS_IMAGES}/dark-2.jpg`,
      name: "dark-2",
    },
  ];

  await Image.bulkCreate(images);
};
