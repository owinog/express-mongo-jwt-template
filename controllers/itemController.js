const Item = require("../models/Item");

exports.getItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

exports.addItem = async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.status(201).json(item);
};

exports.updateItem = async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(item);
};

exports.deleteItem = async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.status(204).end();
};
