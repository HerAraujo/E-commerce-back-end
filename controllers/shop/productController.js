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
    res.status(404).json({ message: `Featured products not found` });
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

module.exports = { showFeaturedProducts, showProduct };
