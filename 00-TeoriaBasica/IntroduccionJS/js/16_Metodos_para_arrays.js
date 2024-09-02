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


console.table(meses);
/* forEach, se itera sobre todo el arreglo*/
meses.forEach(function(meses){
    if ( meses == 'Marzo'){
        console.log('Marzo si existe');
        
    }
});

/* Include  */
let resultado = meses.includes('Marzo'); /* Sirve para arreglos pequeños */

/* Some ideal para arreglo de objetos */
resultado = carrito.some(function(producto){
    return producto.nombre === 'Saco';
});
console.log(resultado);

/* Reduce */

resultado = carrito.reduce(function(total, producto) {
    return total + producto.precio;
}, 0);
console.log(resultado);

/* Filter */
resultado = carrito.filter(function(producto){
    return producto.precio > 50;
});

console.log(resultado);


























