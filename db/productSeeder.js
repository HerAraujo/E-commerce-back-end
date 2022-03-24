const { Product } = require("../models");

module.exports = async () => {
  const products = [
    {
      name: "Pils Munich",
      description:
        "Blonde beer made with light malts such as Malt Pilsner or Premium Pilsner. Has a slight aroma of hops with soft and fresh notes.",
      price: 4.51,
      stock: 20,
      featured: true,
      slug: "-pils-munich",
      image: [{ reference: 1 }],
      categoryId: 1,
    },
    {
      name: "Amber Brussels",
      description:
        "Mild caramel flavor, made with a combination of four malts, which give it its characteristic amber color and malty flavor, leaving a subtle sweetness in the mouth.",
      price: 3.98,
      stock: 25,
      slug: "-amber-brussels",
      image: [{ reference: 2 }],
      categoryId: 1,
    },
    {
      name: "Bock Rotterdam",
      description:
        "Bock is a strong beer of German origin, brewed as a lager when made with only barley malt, and brewed as an ale when wheat malt is added.",
      price: 2.99,
      stock: 30,
      featured: true,
      slug: "-bock-rotterdam",
      image: [{ reference: 3 }],
      categoryId: 1,
    },
    {
      name: "Stout Mons",
      description:
        "Stout is characterized by being extremely dark, almost black, well toasted and with a high percentage of alcohol. On the nose aromas of coffee and chocolate are perceived. Its foam is dense.",
      price: 5.65,
      stock: 40,
      slug: "-stout-mons",
      image: [{ reference: 4 }],
      categoryId: 3,
    },
    {
      name: "Porter Berlin",
      description:
        "Clearly balanced towards the malts, with a restrained roast and delicious flavors of dark chocolate and caramel.",
      price: 3.25,
      stock: 36,
      featured: true,
      slug: "-porter-berlin",
      image: [{ reference: 5 }],
      categoryId: 3,
    },
    {
      name: "Ale Lisburn",
      description:
        "Medium or slightly fuller body, medium levels of fruity aromas and flavors, medium hop bitterness and flavors, and medium to slightly fuller malt character.",
      price: 4.36,
      stock: 24,
      slug: "-ale-lisburn",
      image: [{ reference: 6 }],
      categoryId: 2,
    },
  ];

  await Product.bulkCreate(products);
};
