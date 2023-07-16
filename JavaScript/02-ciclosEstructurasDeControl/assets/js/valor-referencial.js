
let a = 10; 
let b = a;
a = 30;

console.log({a,b});

let luis = {nombre: 'Luis'};
let silvana = luis;
silvana.nombre = 'Estefania';

console.log({luis, silvana});

/* Nueva funcio */
const cambiarNombre = ( ...persona ) => {
    persona.nombre = 'Alberto';
    return persona;
}

let andy = { nombre: 'Andy' }
let alberto = cambiarNombre(andy);

console.log({ andy, alberto });

// Arreglos 

const frutas = ['Manzana', 'Pera', 'Piña'];

console.time('slice');
const otrasFrutas = frutas.slice();
console.timeEnd('slice');

console.time('spread')
const otrasFrutas2 = [ ...frutas ];
console.timeEnd('spread');

otrasFrutas.push('Mango'); // Agregamos una nueva fruta

console.table({ frutas, otrasFrutas });