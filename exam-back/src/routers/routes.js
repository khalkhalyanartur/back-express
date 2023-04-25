const express = require("express");
const router = express.Router();
const {
  getAllController,
  createOneController,
  editController
} = require("../controllers/controllers")

router.get("/items", getAllController);
router.post('/items', createOneController);
router.patch('/items/:id', editController);

module.exports = router;