const { Category } = require("../models");

module.exports = async () => {
  const categories = [
    {
      name: "Lager",
      slug: "-lager",
      photo: "category-lager.jpg",
    },
    {
      name: "Red",
      slug: "-red",
      photo: "category-red.jpg",
    },
    {
      name: "Dark",
      slug: "-dark",
      photo: "category-dark.jpg",
    },
  ];

  await Category.bulkCreate(categories);
};
