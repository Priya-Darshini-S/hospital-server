const moongoose = require("mongoose");

module.exports = () => {
   // return moongoose.connect("mongodb://localhost:27017/testing");
  return moongoose.connect("mongodb+srv://priyas:priya612@cluster0.kga4n.mongodb.net/hospital_app");   
};