$(document).ready(function () {

    getCliente();
    getContacto();

    $("#contacto").submit(function (e) {
        e.preventDefault();
        let datos = $(this).serialize();

        $.ajax({
            url: "http://localhost:3000/nuevo_contacto",
            method: "post",
            data: datos,
            success: function (respuesta) {
                alert(respuesta);
                window.location.href = "http://localhost:3000/contacto"
            },
        });
    });

    function getContacto() {
        $.ajax({
            url: "http://localhost:3000/obtener_contactos",
            method: "get",
            success: function (respuesta) {
                console.log(respuesta);
                armar_tabla(respuesta);
            },
        });
    }

    function getCliente() {

        $.ajax({
            url: "http://localhost:3000/getClientes",
            method: "get",
            success: function (respuesta) {
                console.log(respuesta);
                armar_options(respuesta);
            },
        });
    }

});