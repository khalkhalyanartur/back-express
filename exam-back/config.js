require("dotenv").config();
const PORT = process.env.PORT || 9000;
const DB_CONNECTION = process.env.DB_CONNECTION || "mongodb+srv://my_db:qwer1234@cluster0.j9mw9eh.mongodb.net/db_item";
module.exports = { PORT, DB_CONNECTION }