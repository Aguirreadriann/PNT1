// captura del form. desde el DOM
const formulario = document.getElementById("formUsuario");

formulario.addEventListener("submit", function(event) {
    // evita que la pagina se recargue automaticamente al enviar
    event.preventDefault();

    // obtener el valor ingresado en el campo (Objeto js)
    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const edad = document.getElementById("edad").value;

    //ALmacenar los datos en un obj. de js
    const usuario = {
        nombre: nombre,
        email: email,
        edad: parseInt(edad) // parsea el texto a numero
    };

    // Convertir el objeto js a una cadena de texto JSON
    const usuarioJSON = JSON.stringify(usuario, null, 2); // (u,null,2) es para que el JSON se genere con sangrias y saltos de linea.

    // mostrar el JSON en la pagina web
    document.getElementById("jsonGenerado").innerText = usuarioJSON;

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