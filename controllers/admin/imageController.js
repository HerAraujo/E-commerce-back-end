const { Image } = require("../../models");
const formidable = require("formidable");

async function show(req, res) {
  try {
    const images = await Image.findAll({ order: [["Id", "DESC"]] });
    res.json(images);
  } catch (err) {
    res.status(400).json({ message: "An error has ocurred" });
  }
}

async function store(req, res) {
  try {
    const form = formidable({
      multiples: true,
      uploadDir: process.env.ABSOLUTE_IMAGES_FOLDER_PATH,
      keepExtensions: true,
    });

    form.parse(req, (err, fields, files) => {
      const image = Image.create({
        name: files.image.newFilename,
        title: fields.title,
      });
      res.json(files.image);
    });
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
