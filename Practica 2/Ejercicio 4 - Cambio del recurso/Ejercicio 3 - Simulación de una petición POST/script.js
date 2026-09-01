// capturar el formulario de libros desde el DOM
const formulario = document.getElementById("formLibro");

formulario.addEventListener("submit", function(event) {
    // evita que la pagina se recargue automaticamente al enviar
    event.preventDefault();

    // obtener los alores ingresados en los campos de libro
    const titulo = document.getElementById("titulo").value;
    const genero = document.getElementById("genero").value;
    const paginas = document.getElementById("paginas").value;

    //ALmacenar los datos en un obj. de js
    const libro = {
        titulo: titulo,
        genero: genero,
        paginas: parseInt(paginas) // parsea el texto a numero
    };

    // Convertir el objeto js a una cadena de texto JSON
    const libroJSON = JSON.stringify(libro, null, 2); // (u,null,2) es para que el JSON se genere con sangrias y saltos de linea.

    // mostrar el JSON en la pagina web
    document.getElementById("jsonGenerado").innerText = libroJSON;

    // realiza la peticion POST enviando el JSON al endpoint de libros
    fetch("/api/libros", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(libro) // enviamos el obj. "libro" como json
    })
    .then(response => response.json())
    .then(data => {
        // muestra el mens. de exito en la pagina
        document.getElementById("resultado").innerText = "Libro agregado correctamente";
    })
    .catch(error => {
        // captura y muestra errores en la consola
        console.error(error);
    });
});