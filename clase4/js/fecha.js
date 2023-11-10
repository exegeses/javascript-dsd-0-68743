//ubicamos elemento dentro del DOM
const texto = document.querySelector('#texto');
/*
    mostrar la fecha
    formato:   10/11/2023
*/
//creamos objeto de fecha
const fecha = new Date();
console.log( fecha );

//obtenemos el número de día de mes
let diaMes = fecha.getDate();
console.log( diaMes );

//obtenemos el número de mes actual
let mes = fecha.getMonth() + 1;
console.log( mes );

//obtenemos el número de año
let anio = fecha.getFullYear();
console.log( anio );

//imprimimos en el span
texto.innerText = diaMes +'/'+ mes +'/'+ anio;
