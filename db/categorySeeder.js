const { Category } = require("../models");

module.exports = async () => {
  const categories = [
    {
      name: "Lager",
      slug: "-lager",
      photo: `${process.env.SEEDERS_IMAGES}/category-lager.jpg`,
    },
    {
      name: "Red",
      slug: "-red",
      photo: `${process.env.SEEDERS_IMAGES}/category-red.jpg`,
    },
    {
      name: "Dark",
      slug: "-dark",
      photo: `${process.env.SEEDERS_IMAGES}/category-dark.jpg`,
    },
  ];

  await Category.bulkCreate(categories);
};
