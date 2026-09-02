// capturar el formulario de libros desde el DOM
const formulario = document.getElementById("formLibro");

formulario.addEventListener("submit", function (event) {
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
        .then(response => {
            // Ponemos un condicional en caso de que el servidor responda con un error
            if(!response.ok){
                throw new Error("Los datos enviados son incorrectos");
            }
            return response.json();
        })
        .then(data => {
            // Este seria el caso exitoso: Muestra msj en verde
            document.getElementById("resultado").innerText = data.mensaje;
            document.getElementById("resultado").style.color = "green";
        })
        .catch(error => {
            // Caso de error: si falla la conexion o el servidor, devuelve error en rojo.
            document.getElementById("resultado").innerText = "Error: No fue posible conectar con el servidor";
            document.getElementById("resultado").style.color = "red";

            console.error("Detalle de error en consola:");
            
        });
});