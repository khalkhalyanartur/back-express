const {
  getAllService,
  createItemService,
  editItemService
} = require("../services/services")

const getAllController = async (req, res) => {
  try {
    const items = await getAllService();

    res.status(200).send(items)
  } catch (error) {
    res.ststus(400).send("Eroor to get All")
  }
}

const createOneController = async (req, res) => {
  try {
    const { title, text, author, year} = req.body;

    const item = await createItemService(title, text, author, year);
 
    res.status(200).send(item);
  } catch(error) {
    res.status(400).send("Faled create")
  }
}

const editController = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, text, author, year} = req.body;

    const updatedItem = await editItemService(id, title, text, author, year);

    res.status(200).send(updatedItem); 
  } catch (error) {
    res.status(400).send("Failed to edit item")
  }
}

module.exports = {
  getAllController,
  createOneController,
  editController
}