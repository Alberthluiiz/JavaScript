console.warn('While');

const carros = [ 'Ford', 'Mazda', 'Honda', 'Toyota' ]

let i = 0;
/* while( i < carros.length ) {
    console.log(carros[i] );
    i++;
} */

// undefined
// null
// false

while( carros[i] ) {
    if ( i === 1 ) {
        /* break; */    // Si dejamos solo el break, creamos un ciclo infinito
        i++;
        continue;
    }
    console.log( carros[i] );
    i++;
}

console.warn('Do While');

let j = 0;
do {
    console.log( carros[j] );
    j++;
} while( carros[j] );