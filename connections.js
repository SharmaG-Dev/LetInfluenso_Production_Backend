const mongoose = require("mongoose");

const url =
  "mongodb+srv://Abhishek123:1234@cluster0.zht1g.mongodb.net/letInfluenso?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => {
    console.log("sucessfully connected");
  }) // when result is successfull
  .catch((err) => {
    console.error(err);
  }); // when there is some error

module.exports = mongoose;
