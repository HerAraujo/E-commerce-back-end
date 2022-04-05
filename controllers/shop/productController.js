const { Product } = require("../../models");

async function showFeaturedProducts(req, res) {
  try {
    const products = await Product.findAll({
      where: {
        featured: true,
      },
    });
    res.json(products);
  } catch (err) {
    res.json(err);
    //res.status(404).json({ message: `An error has ocurred` });
  }
}

async function showProduct(req, res) {
  try {
    const product = await Product.findByPk(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: `Product ${req.params.id} not found` });
    }
  } catch (err) {
    res.status(400).json({ message: `An error has ocurred` });
  }
}

async function showProductsByCategory(req, res) {
  try {
    const products = await Product.findAll({
      where: {
        categoryId: req.params.id,
      },
    });

    products.length > 0
      ? res.json(products)
      : res.status(404).json({ message: `Category ${req.params.id} has not products` });
  } catch (err) {
    res.status(400).json({ message: `An error has ocurred` });
  }
}

module.exports = { showFeaturedProducts, showProduct, showProductsByCategory };
