/*
    para declarar variables utilizamos
    la palabra reservada "let"
*/
let numero = 42;
let frase = 'hola mundo';
/*
    para declarar constantes utilizamos
    la palabra reservada "const"
*/
const nombre = 'Marcos';

document.write( numero );
document.write( '<br>' );
//alert( frase );

//sobreescribimos la variable numero
numero = 73;
document.write( numero );

document.write( '<br>' );
document.write( nombre );
//nombre = 'x';  no se puede sobreescribir una contante

//ubicamos el elemnto con el id "texto"
document.querySelector('#texto').innerText = nombre;