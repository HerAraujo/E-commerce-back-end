const { Image } = require("../models");

module.exports = async () => {
  const images = [
    {
      name: "lager-1.jpg",
      title: "lager-1",
    },
    {
      name: "lager-2.jpg",
      title: "lager-2",
    },
    {
      name: "lager-3.jpg",
      title: "lager-3",
    },
    {
      name: "red-1.jpg",
      title: "red-1",
    },
    {
      name: "red-2.jpg",
      title: "red-2",
    },
    {
      name: "dark-1.jpg",
      title: "dark-1",
    },
    {
      name: "dark-2.jpg",
      title: "dark-2",
    },
    {
      name: "heineken.jpg",
      title: "heineken",
    },
    {
      name: "budweiser.jpg",
      title: "budweiser",
    },
    {
      name: "carlsberg.jpg",
      title: "carlsberg",
    },
    {
      name: "stella-artois.jpeg",
      title: "stella-artois",
    },
    {
      name: "amstel.jpg",
      title: "amstel",
    },
  ];

  await Image.bulkCreate(images);
};
