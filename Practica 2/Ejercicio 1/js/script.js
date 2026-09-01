// captura del form. desde el DOM
const formulario = document.getElementById("formUsuario");

formulario.addEventListener("submit", function(event) {
    // evita que la pagina se recargue automaticamente al enviar
    event.preventDefault();

    // obtiene el valor ingresado en el campo "nombre"
    const nombre = document.getElementById("nombre").value;

    // realiza la peticion POST al endpoint simulado
    fetch("/api/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre: nombre
        })
    })
    .then(response => response.json())
    .then(data => {
        // muestra el mens. de exito en la pagina
        document.getElementById("resultado").innerText = "Usuario agregado correctamente";
    })
    .catch(error => {
        // captura y muestra errores en la consola
        console.error(error);
    });
});