//'use strict'; // Correr JavaScript en modo estricto
const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true
}

console.warn('Uso del freeze');
Object.freeze(producto);
producto.imagen = 'imagen.jpg'

console.log(Object.isFrozen(producto));
console.log(producto);

console.warn('Uso del Seal, permite modificar las propiedades');

Object.seal(producto);
producto.imagen = 'imagen.jpg'

console.log(Object.isSealed(producto));
console.log(producto);
