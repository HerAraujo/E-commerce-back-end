const { Image } = require("../models");

module.exports = async () => {
  const images = [
    {
      name: "belgian-style-blonde-ale.jpeg",
      title: "belgian-style-blonde-ale",
    },
    {
      name: "belgian-style-dubbel.jpeg",
      title: "belgian-style-dubbel",
    },
    {
      name: "belgian-style-golden-strong-ale.jpeg",
      title: "belgian-style-golden-strong-ale",
    },
    {
      name: "belgian-style-pale-ale.jpeg",
      title: "belgian-style-pale-ale",
    },
    {
      name: "belgian-style-quadrupel.jpeg",
      title: "belgian-style-quadrupel",
    },
    {
      name: "belgian-style-saison.jpeg",
      title: "belgian-style-saison",
    },
    {
      name: "belgian-style-tripel.jpeg",
      title: "belgian-style-tripel",
    },
  ];

  await Image.bulkCreate(images);
};
