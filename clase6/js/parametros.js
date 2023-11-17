// ubicamos elemento dentro del DOM
const caja = document.querySelector('#caja');
const picker = document.querySelector('#picker');


//declaración de funciones
function saludar( persona )
{
    console.log('hola ', persona );
}
function pintar( codigo )
{
    caja.style.backgroundColor = codigo;
}
function colorear()
{
    //obtenemos el código que seleccione el usuario
    // en el color picker
    let colorSeleccionado = picker.value;
    // invocamos la función pintar()
    pintar( colorSeleccionado );
}


//invocamos la función
saludar( 'Rick' );
saludar( 'Morty' );


