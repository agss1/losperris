const peliculas = [
    { nombre: "El conjuro", genero: "Terror", año: 2013 },
    { nombre: "Cars 2", genero: "Infantil", año: 2012 },
    { nombre: "Nahir", genero: "Documental", año: 2024 },
    { nombre: "10 cosas que odio de ti", genero: "Romance", año: 1999 }
];

const select = document.getElementById('propiedad');
const contenedor = document.getElementById(`contenedor`);
const boton = document.getElementById(`boton`);
const buscador = document.getElementById(`buscador`)

boton.addEventListener('click', function () {
    const filtro = select.value;
    const texto = buscador.value.toLowerCase();

    let resultados = peliculas;

    if (filtro !== "todos" && texto) {
        resultados = peliculas.filter(pelicula =>
            pelicula[filtro] && pelicula[filtro].toLowerCase().includes(texto)
        );
    } else if (filtro !== "todos") {
        resultados = peliculas.filter(pelicula =>
            pelicula[filtro]
        );
    } else if (texto) {
        peliculas.filter(pelicula =>
            pelicula.nombre.toLowerCase().includes(texto) ||
            pelicula.genero.toLowerCase().includes(texto) ||
            pelicula.año.toString().includes(texto)
        )
    }

    mostrarPeliculas(resultados);
});

function mostrarPeliculas(lista) {
    if (lista.length === 0) {
        contenedor.innerHTML = "<p>No se encontraron películas.</p>";
        return;
    }
    contenedor.innerHTML = lista.map(pelicula =>
        <div class="card mb-2">
            <div class="card-body">
                <h5 class="card-title">${pelicula.nombre}</h5>
                <p class="card-text">Género: ${pelicula.genero} | Formato: ${pelicula.formato} | Año: ${pelicula.año}</p>

            </div>
        </div>
    )
}