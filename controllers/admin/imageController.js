const { Image } = require("../../models");

async function show(req, res) {
  try {
    const images = await Image.findAll();
    res.json(images);
  } catch (err) {
    res.status(400).json({ message: "An error has ocurred" });
  }
}

async function store(req, res) {
  try {
    const image = await Image.create({
      name: req.file.filename,
      title: req.body.title,
    });
    res.json(image);
  } catch (err) {
    res.status(400).json({ message: "An error has ocurred" });
  }
}

async function destroy(req, res) {
  try {
    const image = await Image.findByPk(req.params.id);
    image && (await image.destroy());
    res.json(image);
  } catch (err) {
    res.status(400).json({ message: "An error has ocurred" });
  }
}

module.exports = { show, store, destroy };
