const mongoose = require("mongoose");

function connectToDb() {
  mongoose
    .connect(process.env.DB_CONNECT, console.log(`connected To DB!`))
    .catch((error) => console.log(error));
}

module.exports = connectToDb;