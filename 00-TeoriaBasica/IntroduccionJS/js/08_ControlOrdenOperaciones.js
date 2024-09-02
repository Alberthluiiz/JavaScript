// Orden de las Operaciones

let resultado; 

console.warn('1. Multiplicación, 2 Suma');
resultado = 20 + 30 * 2;
console.log('20 + 30 * 2 = ' + resultado);

console.warn('1. Parentesis');
resultado = (20 + 30) * 2;
console.log('(20 + 30) * 2 = ' + resultado);

console.warn('1. 20% ');
resultado = (100 + 200 + 300) * .2;
console.log('(100 + 200 + 300) * .2 = ' + resultado);

console.warn('1. Impuesto 1.16%');
resultado = (100 + 200 + 300) * 1.16;
console.log('(100 + 200 + 300) * 1.16 = ' + resultado);

console.warn('1. Descuento por compra de 2 boletos');
resultado = ( 600 + 600) * .05;
console.log('( 600 + 600) * 1.05) = ' + resultado);

// Incrementos
console.warn('Incremento');
let puntaje = 10;
console.log('10');
/* puntaje ++; */
++puntaje;
console.log(puntaje);

console.warn('Decremento');
let puntajeDecremento = 10;
console.log(puntajeDecremento);
puntajeDecremento--;
console.log(puntajeDecremento);