// Arreglos o Arrays
/* console.warn("Declaracion de arreglos");
console.log(" const numero = [10, 20, 30, 40, 50]");

const numeros = [10, 20, 30, 40, 50];
console.warn("Arrays en tabla formateada");
console.table(numeros);
console.warn("Arrays sin tabla");
console.log(numeros);

console.warn("Otra manera de declarar Arrays"); */
// const meses = new Array ('Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo');
/* const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];
console.table(meses); */

/* Acceder a los valores de un Arreglo */
/* console.warn("Acceder a los valores de un Arreglo");
console.log(numeros[4]);
console.log(meses[2]);

console.warn("Conocer la extensión de un arreglo");
console.log(meses.length);

console.warn("Iterador ForEach");
numeros.forEach(function (numero) {
  console.log(numero);
}); */


/** Metodos para los Arrays */

/* numeros[5] = 60;
console.table(numeros);

numeros.push(60, 70, 80);
console.table(numeros);

console.warn('Metodos para Arrays'); */

const numbers = [10, 20, 30, 40, 50];
const colors = ["Amarillo", "Azul", "Tomate", "Turqueza", "Blanco"];

/* console.table(numbers);
console.table(colors); */

/* console.warn('Agrega un valor al final del arreglos PUSH');
console.warn('---- PUSH al final del arreglo----'); */
/* numbers.push(-20,50,-10);
console.table(numbers); */

/* console.warn('---- UNSHIFT al inicio del arreglo ----'); */
/* numbers.unshift(-10, -20, -30);
console.table(numbers); */

/* console.warn('---- Emilinar elemntos del arreglo ----');
console.warn('---- POP, elimina al dato del ultimo del areglo ----'); */
/* colors.pop();
console.table(colors); */

/* console.warn('---- SHIFT, elimina al dato del ultimo del areglo ----'); */
/* colors.shift();
console.table(colors); */

/* console.warn('---- SPLICE, elimina al dato en especifico ----'); */
/* colors.splice(2,1); 
console.table(colors); */


console.warn('Rest Operator o Spread Operator');

console.warn('Agrega al final');
const nuevoArreglo = [...colors, 'Gris'];
console.log(nuevoArreglo);

console.warn('Agrega al final');
const nuevoArreglo1 = ['Negro', ...colors];
console.log(nuevoArreglo1);



