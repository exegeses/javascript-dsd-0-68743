//ubicamos elemento dentro del DOM
const caja = document.querySelector('#caja');

//declaración de funciones
function pintarRojo()
{
    caja.style.backgroundColor = '#d00';
    caja.innerText = 'Rojo';
}
function pintarAmarillo()
{
    caja.style.backgroundColor = '#ee0';
    caja.innerText = 'Amarillo';
}
function pintarVerde()
{
    caja.style.backgroundColor = '#2a2';
    caja.innerText = 'Verde';
}
