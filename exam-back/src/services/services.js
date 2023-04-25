const Item = require("../model/model");

const getAllService = async () => {
  const items = await Item.find();

  return items;
}

const createItemService = async (title, text, author, year) => {
  const newItem = new Item({ title, text, author, year });
  const savedItem = await newItem.save();

  return savedItem;
}

const editItemService = async (id, title, text, author, year) => {
  console.log("id=",id, "titile=",title, "tetxt=", text, "a=",author,"y=", year);
  const updatedItem = await Item.findByIdAndUpdate(
    { _id: id},
    { title, text, author, year },
    { new: true }
  );

  return updatedItem;
}

module.exports = {
  getAllService,
  createItemService,
  editItemService
}