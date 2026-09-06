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

const formulario = document.getElementById("formLibro");


// =======================================================
// 2. EVENTO SUBMIT
// =======================================================

formulario.addEventListener("submit", function (event) {

    event.preventDefault();

    // ===================================================
    // 3. OBTENER DATOS DEL FORMULARIO
    // ===================================================

    const titulo =
        document.getElementById("titulo").value;

    const genero =
        document.getElementById("genero").value;

    const paginas =
        document.getElementById("paginas").value;


    // ===================================================
    // EJERCICIO 1
    // ===================================================
    //
    // Construir un objeto utilizando los datos
    // obtenidos del formulario.
    //
    // ===================================================

    const libro = {
        titulo: titulo,
        genero: genero,
        paginas: parseInt(paginas)
    };


    // ===================================================
    // MOSTRAR DATOS
    // ===================================================

    document.getElementById("datosPreparados").innerText =
        JSON.stringify(libro, null, 4);


    // ===================================================
    // EJERCICIO 2
    // ===================================================
    //
    // Convertir el objeto usuario a JSON.
    // Mostrarlo en jsonResultado.
    //
    // ===================================================


    const libroJSON = JSON.stringify(libro, null, 4);

    document.getElementById("jsonResultado").innerText =
        libroJSON;



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


    fetch("/api/libros", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify(libro)

    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Los datos enviados son incorrectos");
            }
            return response.json();
        })
        .then(data => {
            document.getElementById("resultado").innerText = data.mensaje;
            document.getElementById("resultado").style.color = "green";
        })
        .catch(error => {
            document.getElementById("resultado").innerText = "Error: No fue posible conectar con el servidor";
            document.getElementById("resultado").style.color = "red";

            console.error("Detalle de error: ", error);
        });



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


    const endpoint = "/api/libros";

    let servicio = "";

    if (endpoint === "/api/usuarios") {
        servicio = "Servicio de Usuarios";
    } else if (endpoint === "/api/productos") {
        servicio = "Servicio de Productos";
    } else if (endpoint === "/api/pedidos") {
        servicio = "Servicio de Pedidos";
    } else if (endpoint === "/api/libros") {
        servicio = "Servicio de Libros";
    } else {
        servicio = "Servicio desconocido";
    }

    document.getElementById("gatewayResultado").innerText =
        "El API Gateway dirige la solicitud a: " + servicio;


    // ===================================================
    // EJERCICIO 6
    // ===================================================
    //
    // Simular una respuesta exitosa del backend.
    //
    // ===================================================


    const respuesta = {
        estado: "OK",
        mensaje: "Operación realizada correctamente"
    };

    document.getElementById("resultado").innerText =
        respuesta.mensaje;


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
