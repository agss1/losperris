let icono = document.createElement("i")
//boton comprar abajo
const botoncomprar = document.getElementById('comprar');
botoncomprar.addEventListener('click', function () {
    alert('Entrada comprada');
});
botoncomprar.classList.add("btn");
botoncomprar.classList.add("botoncomprar");

//boton comprar arriba
//boton cancelar abajo
const boton2 = document.getElementById('cancelar');


boton2.classList.add("btn");
boton2.classList.add("btn-white");
boton2.classList.add("border-2");
boton2.classList.add("border-dark");
icono.classList.add("bi")
icono.classList.add("bi-x-octagon-fill")
boton2.appendChild(icono);
boton2.addEventListener('click', function () {
    alert('Compra cancelada');
});
//boton cancelar arriba
//boton imprimir abajo
const boton3 = document.getElementById('imprimir');
boton3.classList.add("btn");
boton3.classList.add("btn-success");
boton3.addEventListener('click', function () {
    alert('los tickets se estan imprimiendo');
});
//boton imprimir arriba


// creo contenedor 
let contenedor1 = document.getElementById("contenedor1");
contenedor1.classList.add("row");
//CREO CLASE
class Pelicula {
    constructor(id, imagen, nombre, genero, descripcion) {
        this.id = id;
        this.imagen = imagen;
        this.nombre = nombre;
        this.genero = genero;
        this.descripcion = descripcion;
    }

}
// CREE LA LISTA DE PELICULAS
let listDepeliculas = [
    new Pelicula(1, "https://i.pinimg.com/1200x/14/2c/68/142c687c979283e65f73788d1556604e.jpg", "El conjuro", "Terror", "A principios de los años 70, Ed y Lorrain Warren, reputados investigadores de fenómenos paranormales, se enfrentan a una entidad demoníaca al intentar ayudar a una familia que está siendo aterrorizada por una presencia oscura en su aislada granja."),
    new Pelicula(2, "https://m.media-amazon.com/images/M/MV5BMTUzNTc3MTU3M15BMl5BanBnXkFtZTcwMzIxNTc3NA@@._V1_FMjpg_UX1000_.jpg", "Cars 2", "Infantil", "El Rayo McQueen y su amigo Mate viajan al extranjero para competir en el primer Gran Prix Mundial, un torneo internacional que busca al auto más rápido del mundo."),
    new Pelicula(3, "https://i.pinimg.com/1200x/0e/74/ac/0e74ac76fde086f745cf6e4d7e6a9cf9.jpg", "Nahir el documental", "Drama policial", "En 2018, Nahir Galarza, de 19 años, fue condenada a cadena perpetua por haber asesinado a su novio, Fernando Pastorizzo. La situación se complica cuando acusa a su padre, un agente de policía, de ser el autor del homicidio."),
    new Pelicula(4, "https://i.pinimg.com/1200x/c5/e2/43/c5e243e9133bcbb7859141c54ff5345c.jpg", "10 cosas que odio de ti", "Romance", "Las hermanas Stratford son muy distintas. La bella y popular Bianca nunca ha salido con un chico, pero lo está deseando, y Kat, su hermana mayor, es arisca y con mal genio. Su padre no deja que Bianca tenga novio hasta que Kat consiga uno.")
]



// creo la card1 
let col1 = document.createElement("div")
col1.classList.add("col")

let card1 = document.createElement("div")
card1.classList.add("card")
card1.style.width = "300px"
//agrego una iamgen 
let iamgen1 = document.createElement("img")
iamgen1.src = "https://i.pinimg.com/1200x/14/2c/68/142c687c979283e65f73788d1556604e.jpg"
iamgen1.classList.add("card-img-top")
iamgen1.alt = "El conjuro"
card1.appendChild(iamgen1)

let cardbody = document.createElement("div")
cardbody.classList.add("card-body")
card1.appendChild(cardbody)
col1.appendChild(card1)

//creamos titulo
let titulo = document.createElement("h5")
titulo.classList.add("card-tittle")
titulo.textContent = "El conjuro"
cardbody.appendChild(titulo)
//parrafo = p5
let parrafo1 = document.createElement("p")
parrafo1.classList.add("card-text")
parrafo1.textContent = "A principios de los años 70, Ed y Lorrain Warren, reputados investigadores de fenómenos paranormales, se enfrentan a una entidad demoníaca al intentar ayudar a una familia que está siendo aterrorizada por una presencia oscura en su aislada granja."
cardbody.appendChild(parrafo1)
//CARD 2 
//creo contenddor 
let col2 = document.createElement("div")
col2.classList.add("col")
//card2 
let card2 = document.createElement("div")
card2.classList.add("card2")
card2.style.width = "300px"
//agregamos la imagen card 2 
let imagen2 = document.createElement("img")
imagen2.src = "https://m.media-amazon.com/images/M/MV5BMTUzNTc3MTU3M15BMl5BanBnXkFtZTcwMzIxNTc3NA@@._V1_FMjpg_UX1000_.jpg"
imagen2.classList.add("card-img-top")
imagen2.alt = "Cars 2"
card2.appendChild(imagen2)
col2.appendChild(card2)

let cardBody2 = document.createElement("div")
cardBody2.classList.add("card-body2")
card2.appendChild(cardBody2)

//creamos el titulo
let titulo2 = document.createElement("h5")
titulo2.classList.add("card-titt")
titulo2.textContent = "Cars 2"
cardBody2.appendChild(titulo2)
// parrafo = p5
let parrafo2 = document.createElement("p")
parrafo2.classList.add("card-text")
parrafo2.textContent = "El Rayo McQueen y Mate viajan a Japón para participar en una carrera patrocinada por los fabricantes de un tipo de combustible ecológico. Sin embargo, unos villanos pretenden que el nuevo producto fracase."
cardBody2.appendChild(parrafo2)
//card3
//creo contenedor  
let col3 = document.createElement("div")
col3.classList.add("col")
//card 3
let card3 = document.createElement("div")
card3.classList.add("card3")
card3.style.width = "300px"
//agregamos la imagen card3
let imagen3 = document.createElement("img")
imagen3.src = "https://i.pinimg.com/1200x/0e/74/ac/0e74ac76fde086f745cf6e4d7e6a9cf9.jpg"
imagen3.classList.add("card-img-top")
imagen3.alt = "Nahir el documental "
card3.append(imagen3)
col3.appendChild(card3)

let cardBody3 = document.createElement("div")
cardBody3.classList.add("card-body2")
card3.appendChild(cardBody3)

//creamos el titulo
let titulo3 = document.createElement("h5")
titulo3.classList.add("card-titt")
titulo3.textContent = "Nahir el documental"
cardBody3.appendChild(titulo3)
// parrafo = p5
let parrafo3 = document.createElement("p")
parrafo3.classList.add("card-text")
parrafo3.textContent = "En 2018, Nahir Galarza, de 19 años, fue condenada a cadena perpetua por haber asesinado a su novio, Fernando Pastorizzo. La situación se complica cuando acusa a su padre, un agente de policía, de ser el autor del homicidio."
cardBody3.appendChild(parrafo3)
//CARD 4
// crear contenedor 
let col4 = document.createElement("div")
col4.classList.add("col")
//card4
let card4 = document.createElement("div")
card4.classList.add("card")
card4.style.width = "300px"
//agregamos una imagen 
let imagen4 = document.createElement("img")
imagen4.src = "https://i.pinimg.com/1200x/c5/e2/43/c5e243e9133bcbb7859141c54ff5345c.jpg"
imagen4.classList.add("card-img-top")
imagen4.alt = "10 cosas que odio de ti"
card4.appendChild(imagen4)

col4.appendChild(card4)

let cardBody4 = document.createElement("div")
cardBody4.classList.add("card-body")
card4.appendChild(cardBody4)
//creamos el tutulo
let titulo4 = document.createElement("h5")
titulo4.classList.add("card-titt")
titulo4.textContent = "10 cosas que odio de ti"
cardBody4.appendChild(titulo4)
// parrafo = p5
let parrafo4 = document.createElement("p")
parrafo4.classList.add("card-text")
parrafo4.textContent = "Las hermanas Stratford son muy distintas. La bella y popular Bianca nunca ha salido con un chico, pero lo está deseando, y Kat, su hermana mayor, es arisca y con mal genio. Su padre no deja que Bianca tenga novio hasta que Kat consiga uno."
cardBody4.appendChild(parrafo4)

contenedor1.append(col1, col2, col3, col4)
//filtro
const botonbuscador = document.getElementById(`boton`);

botonbuscador.addEventListener('click', function () {
    const filtro = document.getElementById('propiedad').value;
    const buscador = document.getElementById('buscador').value.toLowerCase();

    let resultados = listDepeliculas;

    if (filtro !== "todos" && buscador) {
        resultados = resultados.filter(pelicula =>
            pelicula[filtro] &&
            pelicula[filtro].toString().toLowerCase().includes(buscador)
        );
    } else if (filtro !== "todos") {
        resultados = resultados.filter(pelicula =>
            pelicula[filtro]
        );
    } else if (buscador) {
        resultados = resultados.filter(pelicula =>
            pelicula.nombre.toLowerCase().includes(buscador) ||
            pelicula.genero.toLowerCase().includes(buscador)
        );
    }

    funcionFiltrar(resultados);
});

function funcionFiltrar(lista) {
    contenedor1.innerHTML = "";

    if (lista.length === 0) {
        contenedor1.innerHTML = "<p>No se encontraron películas.</p>";
        return;
    }

    lista.forEach(pelicula => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.style.width = "300px";
        card.style.margin = "10px";

        let imagen = document.createElement("img");
        imagen.src = pelicula.imagen;
        imagen.classList.add("card-img-top");
        imagen.alt = pelicula.nombre;
        card.appendChild(imagen);

        let cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        card.appendChild(cardBody);

        let titulo = document.createElement("h5");
        titulo.textContent = pelicula.nombre;
        cardBody.appendChild(titulo);

        let genero = document.createElement("p");
        genero.textContent = `Género: ${pelicula.genero}`;
        cardBody.appendChild(genero);

        let descripcion = document.createElement("p");
        descripcion.textContent = pelicula.descripcion;
        cardBody.appendChild(descripcion);

        contenedor1.appendChild(card);
    });
}