$(document).ready(function () {

    getClientes();

    $("#contacto").submit(function (e) {
        e.preventDefault();
        let datos = $(this).serialize();

        $.ajax({
            url: "http://localhost:3000/nuevoCliente",
            method: "post",
            data: datos,
            success: function (respuesta) {
                alert(respuesta);
                window.location.href = "http://localhost:3000/cliente"
            },
        });
    });

    function getClientes() {

        $.ajax({
            url: "http://localhost:3000/gerClientes",
            method: "get",
            success: function (respuesta) {
                console.log(respuesta);
            },
        });
    }

  
});