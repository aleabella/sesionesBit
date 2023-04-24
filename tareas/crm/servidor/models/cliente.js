const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Cliente = new Schema({
    nombre: String,
    apellido: String,
    pais: String,
    correo: String,
    fecha: String,

});

module.exports = mongoose.model("Cliente", Cliente);