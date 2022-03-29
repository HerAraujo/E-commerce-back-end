const { Image } = require("../../models");

async function show(req, res) {
  try {
    try {
      const images = await Image.findAll();
      res.json(images);
    } catch (err) {
      res.status(400).json({ message: "An error has ocurred" });
    }
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
