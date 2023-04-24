const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Contacto = new Schema({
    nombre: String,
    estado: String,
    fecha: String,
    email: String,
    tipo: String,
    descripcion: String,
});

module.exports = mongoose.model("Contacto", Contacto);