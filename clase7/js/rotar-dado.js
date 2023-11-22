//ubicamos elemento dentro del DOM
const caja = document.querySelector('#caja');
/* 
    generar un número aleatorio
    entre 1 y 6 (SIN DECIMALES)

    insertar en el contenedor #caja
    una imagen de la cara del dado (random)

    reproducir audio
*/
function getNumero()
{
    let numeroAleatorio = Math.random();
    // un número aleatorio entre 0 ~ 1 (con decimales)
    console.log( 'Número aleatorio: ', numeroAleatorio );

    let numeroPor5 = numeroAleatorio * 5;
    // al multiplicar por 5 obtenemos un número entre 0 ~ 5
    console.log('Número * 5: ', numeroPor5);

    let numeroRedondeado = Math.round( numeroPor5 );
    // redondea numero   0~4 abajo  ||  5~9  arriba
    console.log('Número redondeado ', numeroRedondeado);

    let numero = numeroRedondeado + 1;
    return numero;
}
/* Math.round( Math.random() *5 +1) */

function mostrarImagen( numero )
{
    caja.innerHTML = '<img src="red/dice-'+ numero +'.png">';
}

function playAudio()
{
    let sonidoDado = new Audio('audio/dice.mp3');
    sonidoDado.play();
}

function tirarDado()
{
    let numero = getNumero();
    mostrarImagen( numero );
    playAudio();
}