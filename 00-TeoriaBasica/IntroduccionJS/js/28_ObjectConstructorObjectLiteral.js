// POO
/* Objeto Literal */
console.warn("objecto  Literal");

const producto = {
  nombre: "Luis",
  precio: 500,
};
console.log(producto);

/* Object Constructor */
console.warn("Object Constructor");
function Cliente(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}

Cliente.prototype.formatearCliente = function () {
  return `El cliente ${this.nombre} tiene un precio de ${this.apellido}`;
};

function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}
// Crear funciones que solo se utilizan en un objeto especifico
Producto.prototype.formatearProducto = function () {
  return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
};

const Producto2 = new Producto("Monitor Curvo de 49", 800);
const Producto3 = new Producto("Laptop", 800);
const cliente = new Cliente("Alberth", "Yaucan");

console.log(Producto2);
console.log(Producto2.formatearProducto());
console.log(Producto3.formatearProducto());
