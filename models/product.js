// variables constantes donde no se pueden cambiar.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// igual que las var que no son globales

// con esto se va creando el modelo de datos
let Product = new Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  date: Date
})

module.exports = mongoose.model('Product', Product);
