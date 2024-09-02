// Objetos
const producto = {
  nombreProducto: "Monitos 20 Pulgadas",
  precio: 300,
  disponible: true,
};

console.warn("Forma Anterior");
const precioProducto = producto.precio;
// const nombreProducto = producto.nombreProducto;
// console.log(precioProducto);
// console.log(nombreProducto);


console.warn("Forma Nueva Destructuring");
const { precio, nombreProducto } = producto;
console.log(precio);
console.log(nombreProducto);
