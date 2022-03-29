const res = require("express/lib/response");
const { Admin } = require("../../models");

async function show(req, res) {
  try {
    const admins = await Admin.findAll();
    res.json(admins);
  } catch (err) {
    res.status(404).json({ message: `Admin list not found` });
  }
}

async function store(req, res) {
  try {
    const admin = await Admin.findOne({
      where: { email: req.body.email },
    });
    if (!admin) {
      await Admin.create({
        firstname: String(req.body.firstname),
        lastname: String(req.body.lastname),
        password: String(req.body.password),
        email: String(req.body.email),
      });
      res.json({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
      });
    } else {
      res.json(`${admin.email} does alrady exist`);
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: `An error has ocurred` });
  }
}

async function destroy(req, res) {
  const admin = await Admin.findOne({ where: { id: String(req.params.id) } });
  await Admin.destroy({
    where: {
      id: String(req.params.id),
    },
  });
  admin
    ? res.status(200).json(`${admin.firstname + " " + admin.lastname} deleted successfully`)
    : res.json(`Admin with id: ${req.params.id} does not exist`);
}

async function update(req, res) {
  const admin = await Admin.findByPk(req.params.id);
  await Admin.update(
    {
      firstname: String(req.body.firstname),
      lastname: String(req.body.lastname),
      email: String(req.body.email),
    },
    { where: { id: req.params.id } },
  );
  admin
    ? res.json(`Admin ${admin.firstname + " " + admin.lastname} updated successfully`)
    : res.json(`Admin with id: ${req.params.id} does not exist`);
}

module.exports = { show, store, destroy, update };
