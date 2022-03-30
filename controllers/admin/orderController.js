const { Order } = require("../../models");

async function show(req, res) {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (err) {
    res.status(400).json({ message: "An error has ocurred" });
  }
}

module.exports = { show };
