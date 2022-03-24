const { Product } = require("../../models");

async function showFeaturedProducts(req, res) {
  try {
    //to home
    //search product condition featured true
    //return json featured products
  } catch (err) {}
}

async function showProduct(req, res) {
  try {
    //to product
    //search product by id (req.params.id)
    //return json searched product
  } catch (err) {}
}

module.exports = { showFeaturedProducts, showProduct };
