/* Arrow Function */
const sumar = (n1, n2) => console.log(n1 + n2);
sumar(5, 10);

/* Parametro se pasa despues del nombre de la funcion, 
el argumento se pasa cuando hacemos el llamado de la funcio */
const aprendiendo = (tecnologia) => console.log(`Aprendiendo ${tecnologia}`);

aprendiendo("JavaScript"); /* Argumento */


/******************** */
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
/* console.log(meses); */

const carrito = [
    { nombre: 'Saco', precio: 20},
    { nombre: 'Pulsera', precio: 5},
    { nombre: 'Bufanda', precio: 3.50},
    { nombre: 'Guantes', precio: 2},
    { nombre: 'Mochilas', precio: 18},
    { nombre: 'Ceramicas', precio: 12},
    { nombre: 'Collares', precio: 100},
    { nombre: 'Ponchos', precio: 35},
]

/** forEach */
meses.forEach( mes => {
    if ( mes == 'Marzo'){
        console.log('Marzo si existe');        
    }
});

let resultado;
/* Some ideal para arreglo de objetos */
resultado = carrito.some( producto => producto.nombre === 'Saco');
/* console.log(resultado); */

/* Reduce */
resultado = carrito.reduce( (total, producto) => total + producto.precio, 0);
console.log(resultado);

/* Filter */
resultado = carrito.filter( producto => producto.precio > 50);
console.log(resultado);

resultado = carrito.filter( producto => producto.nombre !== 'Saco' );
console.log(resultado);



























