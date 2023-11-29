//ubicamos elementos dentro deol DOM
const nombreMarca = document.querySelector('#nombreMarca');
const botones = document.querySelectorAll('#listado img');
console.log( botones );
const btnAnterior = botones[0];
const btnSiguiente = botones[1];

/*### array de marcas ###*/
const marcas = [
                'Hermès', 'Zara', 'Boss', 
                'Aeropostale','Tommy', 'Hollister', 
                'Kingpin', 'Gola', 'Old Navy'
               ];
const cantidad = marcas.length;

// estado inicial
let posicion = 2;
    /* mostrar una marca en el span */
nombreMarca.innerText = marcas[ posicion ];

btnSiguiente.addEventListener(
        'click',
        function()
        {
            posicion++;
            if( posicion == cantidad ){
                posicion = 0;
            }
            nombreMarca.innerText = marcas[ posicion ];
        }
);

btnAnterior.addEventListener(
        'click',
        () => {
            posicion--;
            if(posicion < 0) {
                posicion = cantidad -1;
            }
            nombreMarca.innerText = marcas[posicion];
        }
)