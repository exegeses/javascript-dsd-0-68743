//ubicamos elementos dentro del DOM
const redbull = document.querySelector('#redbull');
const ferrari = document.querySelector('#ferrari');
const amartin = document.querySelector('#amartin');
const mercedes = document.querySelector('#mercedes');

const btnRedbull = document.querySelector('#btnRedbull');
const btnFerrari = document.querySelector('#btnFerrari');
const btnAmartin = document.querySelector('#btnAmartin');
const btnMercedes = document.querySelector('#btnMercedes');

/*
estado inicial: 
se ve 1 (un) sólo div de los 4
- vamos a ocultar los otros 3
*/
ferrari.style.display = 'none';
amartin.style.display = 'none';
mercedes.style.display = 'none';

/* mostrar la escudería que corresponda al hacer click  */

btnRedbull.addEventListener(
        'click',
        function()
        {
            redbull.style.display = 'flex';
            ferrari.style.display = 'none';
            amartin.style.display = 'none';
            mercedes.style.display = 'none';
        }
);
btnFerrari.addEventListener(
        'click',
        function()
        {
            redbull.style.display = 'none';
            ferrari.style.display = 'flex';
            amartin.style.display = 'none';
            mercedes.style.display = 'none';
        }
);
btnAmartin.addEventListener(
        'click',
        function()
        {
            redbull.style.display = 'none';
            ferrari.style.display = 'none';
            amartin.style.display = 'flex';
            mercedes.style.display = 'none';
        }
);
btnMercedes.addEventListener(
        'click',
        function()
        {
            redbull.style.display = 'none';
            ferrari.style.display = 'none';
            amartin.style.display = 'none';
            mercedes.style.display = 'flex';
        }
);
