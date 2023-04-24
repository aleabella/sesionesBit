// Estos son los paquetes que se instalan en terminal y modulos que se deben dejar

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");


//Conexión con mi base de datos y la coleccion creada se llama CRM
mongoose.connect(
    "mongodb+srv://aleabella:K1mhyunj@alecluster.eegcclh.mongodb.net/CRM?retryWrites=true&w=majority"
)
    .then(function (db) {
        console.log("bienvenido, ha conectado de forma exitosa");
    })
    .catch(function (err) {
        console.log(err);
    });


//Configuraciones
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", express.static(path.resolve("../cliente/")));

const Cliente = require("./models/cliente");
const Contacto = require("./models/contactos");

//Inicio
app.get("/", function (req, res) {
    res.sendFile(path.resolve("../cliente/index.html"));
});

app.get("/cliente", function (req, res) {
    res.sendFile(path.resolve("../cliente/cliente.html"));
});

app.get("/contacto", function (req, res) {
    res.sendFile(path.resolve("../cliente/contacto.html"));
});

//Obtener la bases de datos
app.get("/getCliente", async function (req, res) {
    let docs = await Cliente.find();
    res.send(docs);
});

//Obtener contactos
app.get("/getContacto", async function (req, res) {
    let docs = await Contacto.find();
    res.send(docs);
});


//Capturo los datos del registro de un nuevo cliente
app.post("/nuevoCliente", async function (req, res) {

    let datos_enviados = req.body;
    let nuevo_registro = new Cliente(datos_enviados);
    await nuevo_registro.save();
    console.log("Nuevo cliente registrado " + nuevo_registro);
    res.send("Se ha registrado correctamente el cliente");

});

//Capturo los datos del registro de un nuevo cliente
app.post("/nuevo_contacto", async function (req, res) {

    let datos_enviados = req.body;
    let nuevo_registro = new Contacto(datos_enviados);
    await nuevo_registro.save();
    console.log("Contacto registrado " + nuevo_registro);
});




//Puerto y escuchar del servidor
app.listen(3000, function () {
    console.log("Esta vivo!!!");
});