const puntaje = 1000;

console.warn("CONDICIONAL -IF-");

if (puntaje !== 1000) {
  console.log("No es igual");
} else {
  console.log("El puntaje es 1000");
}

console.warn("CONDICIONAL -IF-");
const efectivo = 1000;
const carrito = 800;

if (efectivo > carrito) {
  console.log("El Usuario puede pagar");
} else {
  console.log("Fondos Insuficientes");
}

console.warn("CONDICIONAL -IF ELSE-");
/* const rol = 'ADMINISTRADOR'; */
const rol = "EDITOR";

if (rol === "ADMINISTRADOR") {
  console.log("Acceso a todo el sistema");
} else if (rol === "EDITOR") {
  console.log("No tienes acceso a todo el sistema");
} else {
  ("No tienes acceso");
}
