//ubicamos elementos dentro del DOM
const citas = document.querySelector('#citas');
const boton = document.querySelector('#boton');

// addEventLestener( 'evento', acción )
boton.addEventListener(
        'click',
        function()
        {
            citas.innerText = 'hiciste click!';
        }
);
boton.addEventListener(
        'mouseover',
        function()
        {
            citas.innerText = 'mouse sobre';
        }
);
boton.addEventListener(
        'mouseout',
        function()
        {
            citas.innerText = 'mouse fuera';
        }
);