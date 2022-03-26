const { Category } = require("../models");

module.exports = async () => {
  const categories = [
    {
      name: "Lager",
      slug: "lager",
      photo: "category-lager.jpg",
      description:
        "Lagers are a tighter group of beers than ales. While there are countless styles of ale, there are only a few styles within the lager family. Generally, the characteristics of a lager include a light, crisp taste that is mellow and smooth. They also tend to have more carbonation than ales and are less bitter.",
    },
    {
      name: "Red",
      slug: "red",
      photo: "category-red.jpg",
      description:
        "Red Ales originate from Europe and refers to styles of beer that are dark red or are reddish in appearance. This brew style is still, to some extent, waiting for its big break and to secure a spot amongst the more easily recognized beer styles.",
    },
    {
      name: "Dark",
      slug: "dark",
      photo: "category-dark.jpg",
      description:
        "Dark beer is malty and smooth with toasted caramel flavors. These beers tend to have mid-range alcohol content and lower bitterness profiles.",
    },
    {
      name: "Industrial",
      slug: "industrial",
      photo: "",
      description:
        "We also bring the quality of the best industrial beers. Variety of aromas, flavors and experiences.",
    },
  ];

  await Category.bulkCreate(categories);
};
