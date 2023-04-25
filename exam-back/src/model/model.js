const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemSchema = new Schema({
  title: {
    type: String,
    require: true
  },
  text: {
    type: String,
    require: true
  },
  author: {
    type: String,
    require: true
  },
  year: {
    type: String,
    require: true
  },

})

module.exports = Item = mongoose.model("items", itemSchema)