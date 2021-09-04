const mongoose = require("mongoose");

const confmongoose = mongoose
  .connect(process.env.URLDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connect...");
  })
  .catch((error) => {
    console.log(error);
  });

module.exports = confmongoose;
