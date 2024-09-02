// Objrtod

const nombreProducto = 'Monitos 20 Pulgadas';
const precio = 300;
const disponible = true;

const producto = {
    nombreProducto: 'Monitos 20 Pulgadas',
    precio: 300,
    disponible: true
}

console.log(producto);

console.log(producto.nombreProducto);
console.log(producto.precio);
console.log(producto.disponible);

console.warn('Sintaxis no muy común');
/* Sintaxis no muy comun */
console.log(producto["precio"]);


console.warn('Agregar una propiedad');
producto.imagen = 'imagen.jpg';
console.log(producto);

console.warn('Eliminar propiedades');
delete producto.disponible;
console.log(producto);






