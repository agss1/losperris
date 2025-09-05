let icono = document.createElement("i")
//boton comprar abajo
const boton = document.getElementById('comprar');
boton.addEventListener('click', function() {
    alert('Entrada comprada');
});
boton.classList.add("btn");
boton.classList.add("btn-danger");

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
boton2.addEventListener('click', function() {
    alert('Compra cancelada');
});
//boton cancelar arriba
//boton imprimir abajo
const boton3 = document.getElementById('imprimir'); 
boton3.classList.add("btn");
boton3.classList.add("btn-success");
boton3.addEventListener('click', function() {
    alert('los tickets se estan imprimiendo');
});
//boton imprimir arriba