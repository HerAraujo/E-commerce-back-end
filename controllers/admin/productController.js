//images here or other controller?

const { Product } = require("../../models");

async function show(req, res) {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {}
}

async function store(req, res) {
  try {
  } catch (err) {}
}

async function update(req, res) {
  try {
  } catch (err) {}
}

async function destroy(req, res) {
  try {
  } catch (err) {}
}

module.exports = { show, store, update, destroy };
