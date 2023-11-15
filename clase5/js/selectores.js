//const contenedor = document.getElementById('contenedor');
const contenedor = document.querySelector('#contenedor')
// const h1 = document.getElementsByTagName('h1');
const h1 = document.querySelector('h1');
//const article = document.getElementsByTagName('article');
const articles = document.querySelectorAll('article');
//const destacado = document.getElementsByClassName('destacado');
const destacado = document.querySelectorAll('.destacado');

contenedor.style.color = '#00a';
h1.style.backgroundColor = '#dd9';
articles[0].style.backgroundColor = '#2a0';
articles[0].style.width = '200px';
articles[1].style.backgroundColor = '#2a0';
destacado[0].style.color = 'hsl(310, 80%, 40%)';
destacado[1].style.color = 'hsl(310, 80%, 50%)';