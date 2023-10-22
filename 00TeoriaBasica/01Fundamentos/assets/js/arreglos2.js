let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono'];
// (length) nos indica cuantos elementos hay dentro de un arreglo
console.log('Largo: ',juegos.length);

let primero = juegos[ 2 - 2];
let ultimo = juegos[ juegos.length - 1 ];

console.log( {primero, ultimo} );
console.log( primero, ultimo );
// Metodos forEach
juegos.forEach( (elemento, indice, arr) =>{
    console.log({elemento, indice, arr});
});

let nuevaLongitud =  juegos.push( 'f-Zero' );
console.log({ nuevaLongitud, juegos });

nuevaLongitud = juegos.unshift('Fire Enblem');
console.log({ nuevaLongitud, juegos });

let juegoBorrador = juegos.pop();
console.log({ juegoBorrador, juegos });


let pos = 1;

console.log(juegos);
let juegosBorrados = juegos.splice( pos, 2);
console.log({juegosBorrados, juegos});


let metroidIndex = juegos.indexOf('Metroid');   // CaseSentisive
console.log({metroidIndex});

// Referencia



























