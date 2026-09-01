// captura del form. desde el DOM
const formulario = document.getElementById("formUsuario");

formulario.addEventListener("submit", function(event) {
    // evita que la pagina se recargue automaticamente al enviar
    event.preventDefault();

    // obtener el valor ingresado en el campo
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const edad = document.getElementById("edad").value;

    //ALmacenar los datos en un obj. de js
    const usuario = {
        nombre: nombre,
        email: email,
        edad: parseInt(edad) // parsea el texto a numero
    };

    // realiza la peticion POST enviando el objeto completo
    fetch("/api/usuarios", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(usuario) // enviamos el obj. "usuario" completo como json
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