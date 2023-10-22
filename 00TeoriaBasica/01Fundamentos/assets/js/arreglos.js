/* 
--- Arreglos ---
Son un objetos muy parecidos a una lista de información,
que contienen un grupo de elemetos. 

- Usualmente, esa información dentro del arreglo es del mismo tipo de dato... 

Ejemplo: 
let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];

La posición de los arreglos siempre empiezan en 0
*/


// Arreglo con 10 Elementos
/* const arr = new Array(10);
console.log(arr); */

// Arreglo Vacio
/* const arreglos = [];
console.log(arreglos); */

let videoJuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log({ videoJuegos });
console.log( videoJuegos[0] );

let arregloCosas = [
true,
123,
'Luis Guillén',
1 + 2,
/* Función Tradicional */
function(){},
/* Funcion de Flecha */
()=> {},
/* Objeto Literal */
{ a: 1 },
['X', 'Megaman', 'Zero', 'Dr. Light', [
    'Dr. Willy',
    'Woodman',
]]
];

//console.log({ arregloCosas });
//console.log( arregloCosas[2]);

console.log( arregloCosas );
console.log( arregloCosas[7] );
console.log( arregloCosas[7][3] );
console.log( arregloCosas[7][4][1] );