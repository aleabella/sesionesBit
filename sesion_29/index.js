const http = require('http');
const fs = require("fs");

http.createServer(function(require, res)  {
    
    console.log("El  cliente hizo una petición al servidor")

}).listen(3000);
console.log("Servidor escuchando el puerto 3000")
