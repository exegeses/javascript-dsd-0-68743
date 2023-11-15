//ubicamos elementos dentro del DOM
const txtDias = document.querySelector('#txtDias');
const txtHoras = document.querySelector('#txtHoras');
const txtMinutos = document.querySelector('#txtMinutos');
const txtSegundos = document.querySelector('#txtSegundos');
const h1 = document.querySelector('h1');


//declaramos función/es de control
function cuentaRegresiva()
{
    // creamos obajetos de fecha
    const actual = new Date();
    const final = new Date(2023, 10, 19, 8);// 8AM

    //calculamos la diferencia entre momentos de fecha
        // expresado en miliseguundos
    let diferencia = final - actual;
    console.log('diferencia: ', diferencia);

    /* convertimos unidades de tiempo */

    // obtenemos el tiempo expresado en segundos
        // y quitamos los decimales
    let segundos = Math.trunc( diferencia / 1000 );
    console.log('segundos: ', segundos);

    // obtenemos el tiempo expresado en minutos
    let minutos = Math.trunc( segundos / 60 );
    console.log( 'minutos: ', minutos );

    // obtenemos el tiempo expresado en horas
    let horas = Math.trunc( minutos / 60 );
    console.log( 'horas: ', horas );

    // obtenemos el tiempo expresado en dias
    let dias = Math.trunc(horas / 24);
    console.log('dias: ', dias);


    /* calculamos los tiempos restantes */
    horas = horas % 24;
    minutos = minutos % 60;
    segundos = segundos % 60;

    if( segundos < 10 ){
        segundos = '0'+ segundos;
    }
    if( minutos < 10 ){
        minutos = '0'+ minutos;
    }
    if( horas < 10 ){
        horas = '0'+ horas;
    }
    if( dias < 10 ){
        dias = '0'+ dias;
    }


    /* imprimimos en las span */
    txtDias.innerText = dias;
    txtHoras.innerText = horas;
    txtMinutos.innerText = minutos;
    txtSegundos.innerText = segundos;
}

//ejecutamos la función
cuentaRegresiva();

//actualizamos el llamado a la función
setInterval( cuentaRegresiva, 1000 )