const caja = document.querySelector('#caja');

//declaramos funciones de control
function ocultar()
{
    //caja.style.opacity = 0;
    //caja.style.visibility = 'hidden';
    caja.style.display = 'none';
}

function mostrar()
{
    //caja.style.opacity = 1;
    //caja.style.visibility = 'visible';
    caja.style.display = 'block';
}
function mostrarOcultar()
{
    //(condicion) ? true : false
    ( caja.style.display == 'block' ) ? ocultar() : mostrar();
    /*
    //si la caja se ve
    if( caja.style.display == 'block' ){
        // ocultamos la caja
        ocultar();
    }
    else{
        //mostramos la caja
        mostrar();
    }*/
}