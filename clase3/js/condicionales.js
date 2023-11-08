//ubicamos elemento dentro del DOM
const citas = document.querySelector('#citas');

/*
    hacer pregunta al usuario
    - el usuario va a responder
    almacenar la respuesta en memoria
*/
let respuesta = prompt('¿ Qué seleccionado ganó el mundial Qatar 2022 ?');

//condicional
if( respuesta.toLowerCase() == 'argentina'  ){
    citas.innerHTML = '<img src="imgs/ok.png">';
}
else{
    citas.innerHTML = '<img src="imgs/error.png">';
}