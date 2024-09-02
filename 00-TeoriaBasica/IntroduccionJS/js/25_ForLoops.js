// For Loop
console.warn('For Loop');
console.warn('For Loop - Número Par e Impar');

for( let i = 0 ; i <= 10 ; i++){
    if ( i % 2 === 0){
        console.log(`El numero ${i} es Par`);        
    } else {
        console.log(`El numero ${i} es Impar`);        
    }
}
console.warn('Carrito de compras');

const carritoVenta = [
    { nombre: 'Saco', precio: 20},
    { nombre: 'Pulsera', precio: 5},
    { nombre: 'Bufanda', precio: 3.50},
    { nombre: 'Guantes', precio: 2},
    { nombre: 'Mochilas', precio: 18},
    { nombre: 'Ceramicas', precio: 12},
    { nombre: 'Collares', precio: 100},
    { nombre: 'Ponchos', precio: 35},
]

for( let i = 0 ; i < carritoVenta.length ; i++){
    console.log(carritoVenta[i].nombre);
}

// While Loop
console.warn("While Loop");
console.warn("While Loop - Número Par e Impar");

let k = 0;
while(k <= 10){
    if( k % 2 === 0){
        console.log(`Número ${k} es par`);        
    } else {
        console.log(`Número ${k} es impar`);        
    }
    k++;
}

/* Carrito */
console.warn('While Loop Carrito');

let q = 0;
const carritoCompras = [
    { nombre: "Saco", precio: 20 },
    { nombre: "Pulsera", precio: 5 },
    { nombre: "Bufanda", precio: 3.5 },
    { nombre: "Guantes", precio: 2 },
    { nombre: "Mochilas", precio: 18 },
    { nombre: "Ceramicas", precio: 12 },
    { nombre: "Collares", precio: 100 },
    { nombre: "Ponchos", precio: 35 },
  ];

while( q < carritoCompras.length ){
    console.log(carritoCompras[q].nombre);
    q++;
}


// Do While Loop
console.warn('Do While Loop');
console.warn('Do While Loop - Número Par e Impar');

let j = 0;
do {
    if( j % 2 === 0){
        console.log(`Número ${j} es Par`);
    } else {
        console.log(`Número ${j} es Impar`);
    }
    j++;
} while (j <= 10);


/* Carrito */
console.warn('Do-While Loop Carrito');

let i = 0;
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

do {
    console.log(carrito[i].nombre);
    i++;
}while( i < carrito.length);