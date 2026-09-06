/*
=========================================================
PRÁCTICA INTEGRADORA: AJAX - API GATEWAY - BACKEND
RECURSO: LIBROS
=========================================================
*/
// Se selecciona el formulario de libros usando el DOM
const formulario = document.getElementById("formLibro");

// Se intercepta el evento "submit" para controlar el envio desde JS
formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    // Se obtienen los datos ingresador por el usuario
    const titulo =
        document.getElementById("titulo").value;

    const genero =
        document.getElementById("genero").value;

    const paginas =
        document.getElementById("paginas").value;

    // Se construye el objeto JS que agrupa los datos
    const libro = {
        titulo: titulo,
        genero: genero,
        paginas: parseInt(paginas) // Se castea a entero
    };

    // Se visualiza el objeto JS en la seccion de preparados
    document.getElementById("datosPreparados").innerText =
        JSON.stringify(libro, null, 4);

    // Se convierte el objeto a texto JSON y se muestra
    const libroJSON = JSON.stringify(libro, null, 4);
    document.getElementById("jsonResultado").innerText =
        libroJSON;

    // Se simula el paso de la solicitud por el API
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

    // Se realiza la peticion asincronica con el fetch()
    fetch("/api/libros", {

        method: "POST",

        headers: {
            "Content-Type": "application/json" //Se indica que el cuerpo es un JSON
        },

        body: JSON.stringify(libro) // Se envia el JSON

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

});
