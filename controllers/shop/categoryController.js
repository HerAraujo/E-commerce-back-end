const { Category, Product } = require("../../models");

async function show(req, res) {
  try {
    const category = await Category.findOne({
      where: { slug: req.params.slug },
      include: Product,
    });

    res.json(category);
  } catch (err) {
    res.status(404).json({ message: `Category not found` });
  }
}

module.exports = { show };