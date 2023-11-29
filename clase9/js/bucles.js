let n = 1; //inicio
while ( n < 15 ){ //condicion
    //código
    document.write( n + '<br>' );
    n++;//incremento
}

document.write( '<hr>' );

for( let i = 1; i < 15; i++ )
{
    document.write( i + '<br>' );
}


document.write( '<hr>' );
document.write( '<hr>' );
/*### array de marcas ###*/
const marcas = [
    'Hermès', 'Zara', 'Boss', 
    'Aeropostale','Tommy', 'Hollister', 
    'Kingpin', 'Gola', 'Old Navy'
   ];
const cantidad = marcas.length;

document.write('<ul>');

for( let j = 0; j < cantidad; j++ ){
    document.write( '<li>' + marcas[ j ] + '</li>' );
}

document.write('</ul>');