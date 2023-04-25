const express = require("express");
const mongoose = require("mongoose");
const {PORT, DB_CONNECTION } = require("./config");
const app = express();
const routes = require("./src/routers/routes");

app.use(express.json());
app.use("/",routes);

const loadApp = async () => {
  try {
    await mongoose.connect(DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`)
    })

  } catch (error) {
    console.error(error);
    process.exit(1);
    
  }
}

loadApp();