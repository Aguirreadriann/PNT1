const formulario = document.getElementById("formLibro");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const titulo = document.getElementById("titulo").value;
    const genero = document.getElementById("genero").value;
    const paginas = document.getElementById("paginas").value;

    const libro = {
        titulo: titulo,
        genero: genero,
        paginas: parseInt(paginas)
    };

    const libroJSON = JSON.stringify(libro, null, 2);

    document.getElementById("jsonGenerado").innerText = libroJSON;

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

            console.error("Detalle de error en consola:");

        });
});