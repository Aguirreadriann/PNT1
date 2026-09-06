/*
=========================================================
PRÁCTICA AJAX - API GATEWAY - BACKEND
=========================================================

Este archivo será modificado durante los ejercicios.

Por el momento NO existe un backend real.

El objetivo es simular el recorrido:

    FRONTEND
       ↓
     FETCH
       ↓
  API GATEWAY
       ↓
    BACKEND
       ↓
   RESPUESTA
       ↓
   FRONTEND
=========================================================
*/

// =======================================================
// 1. OBTENER EL FORMULARIO
// =======================================================

const formulario = document.getElementById("formUsuario");


// =======================================================
// 2. EVENTO SUBMIT
// =======================================================

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    // ===================================================
    // 3. OBTENER DATOS DEL FORMULARIO
    // ===================================================

    const nombre =
        document.getElementById("nombre").value;

    const email =
        document.getElementById("email").value;

    const edad =
        document.getElementById("edad").value;


    // ===================================================
    // EJERCICIO 1
    // ===================================================
    //
    // Construir un objeto utilizando los datos
    // obtenidos del formulario.
    //
    // ===================================================

    const usuario = {
        nombre: nombre,
        email: email,
        edad: parseInt(edad)
    };


    // ===================================================
    // MOSTRAR DATOS
    // ===================================================

    document.getElementById("datosPreparados").innerText =
        JSON.stringify(usuario, null, 4);


    // ===================================================
    // EJERCICIO 2
    // ===================================================
    //
    // Convertir el objeto usuario a JSON.
    // Mostrarlo en jsonResultado.
    //
    // ===================================================


    const usuarioJSON = JSON.stringify(usuario);

    document.getElementById("jsonResultado").innerText =
        usuarioJSON;



    // ===================================================
    // EJERCICIO 3
    // ===================================================
    //
    // Preparar una petición POST utilizando fetch().
    //
    // Endpoint:
    // /api/usuarios
    //
    // ===================================================

    /*
    fetch("/api/usuarios", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(usuario)

    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
    */


    // ===================================================
    // EJERCICIO 4
    // ===================================================
    //
    // Cambiar el recurso.
    //
    // Posibilidades:
    // /api/productos
    // /api/pedidos
    // /api/libros
    // /api/peliculas
    //
    // También deberán modificarse los datos enviados.
    //
    // ===================================================


    // ===================================================
    // EJERCICIO 5
    // ===================================================
    //
    // Simular el API Gateway.
    //
    // Mostrar la decisión en gatewayResultado.
    //
    // ===================================================

    /*
    const endpoint = "/api/usuarios";

    let servicio = "";

    if (endpoint === "/api/usuarios") {
        servicio = "Servicio de Usuarios";
    } else if (endpoint === "/api/productos") {
        servicio = "Servicio de Productos";
    } else if (endpoint === "/api/pedidos") {
        servicio = "Servicio de Pedidos";
    } else {
        servicio = "Servicio desconocido";
    }

    document.getElementById("gatewayResultado").innerText =
        "El API Gateway dirige la solicitud a: " + servicio;
    */


    // ===================================================
    // EJERCICIO 6
    // ===================================================
    //
    // Simular una respuesta exitosa del backend.
    //
    // ===================================================

    /*
    const respuesta = {
        estado: "OK",
        mensaje: "Operación realizada correctamente"
    };

    document.getElementById("resultado").innerText =
        respuesta.mensaje;
    */


    // ===================================================
    // EJERCICIO 7
    // ===================================================
    //
    // Incorporar el manejo de errores.
    //
    // ===================================================

    /*
    try {

        // Código que puede generar un error

    } catch (error) {

        document.getElementById("resultado").innerText =
            "Ocurrió un error";
    }
    */


    // ===================================================
    // EJERCICIO 8
    // ===================================================
    //
    // Integrar el recorrido completo:
    //
    // Formulario → Objeto → JSON → Fetch →
    // API Gateway → Backend → Respuesta → Frontend
    //
    // ===================================================

});
