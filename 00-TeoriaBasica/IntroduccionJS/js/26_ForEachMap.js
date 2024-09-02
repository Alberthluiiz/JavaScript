const carrito = [
  { nombre: "Saco", precio: 20 },
  { nombre: "Pulsera", precio: 5 },
  { nombre: "Bufanda", precio: 3.5 },
  { nombre: "Guantes", precio: 2 },
  { nombre: "Mochilas", precio: 18 },
  { nombre: "Ceramicas", precio: 12 },
  { nombre: "Collares", precio: 100 },
  { nombre: "Ponchos", precio: 35 },
];

/* ForEach - solo para mostrar por pantalla o consola*/
console.warn("ForEach ");
const arreglo1 = carrito.forEach((producto) => console.log(producto.nombre));

/* Map  - Crear nuevo Arreglo*/
console.warn("Map");
const arreglo2 = carrito.map((producto) => `${producto.nombre} - ${producto.precio}` );

console.log(arreglo1);
console.log(arreglo2);
