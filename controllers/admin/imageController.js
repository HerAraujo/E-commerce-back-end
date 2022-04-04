const { Image } = require("../../models");
const formidable = require("formidable");
const { createClient } = require("@supabase/supabase-js");
const fs = require("fs");
const path = require("path");

async function show(req, res) {
  try {
    const images = await Image.findAll({ order: [["id", "DESC"]] });
    res.json(images);
  } catch (err) {
    res.status(400).json(err);
  }
}

async function store(req, res) {
  try {
    const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

    const form = formidable({
      multiples: true,
      uploadDir: process.env.ABSOLUTE_IMAGES_FOLDER_PATH,
      keepExtensions: true,
    });

    form.parse(req, async (err, fields, files) => {
      console.log(files);
      // const ext = path.extname(files.avatar.path);
      // const newFileName = files.image.newFilename;
      // const { data, error } = await supabase.storage
      //   .from("avatars")
      //   .upload(newFileName, fs.createReadStream(files.avatar.path), {
      //     cacheControl: "3600",
      //     upsert: false,
      //     contentType: files.avatar.type,
      //   });

      // form.parse(req, async (err, fields, files) => {
      //   const image = Image.create({
      //     name: files.image.newFilename,
      //     title: fields.title,
      //   });
      //   res.json(files.image);
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
