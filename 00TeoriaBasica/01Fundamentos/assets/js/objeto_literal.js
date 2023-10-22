/* Cuando aparescan las {} asociemos que es un Objeto literal*/
const personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70,
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    },
    'ultima pelicula': 'Infinity War',
};

console.log( personaje );
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);
console.log('Coordenadas', personaje.coords);
console.log('Latitud', personaje.coords.lat);
console.log('Número de Trajes', personaje.trajes.length);
console.log('Ultimo Trajes', personaje.trajes[ personaje.trajes.length - 1 ]);

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Ultima Pelicula', personaje["ultima pelicula"]);

// Mas Detalles

delete personaje.edad;
console.log( personaje );

personaje.casado = true;


const entriesPares = Object.entries( personaje );
console.log( entriesPares );

// personaje = true;
console.log( personaje );
Object.freeze( personaje );


personaje.dinero = 10000000000;
personaje.dinero = false;
personaje.direccion.ubicacion = 'Costa Rica';
console.log( personaje );

const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje );
console.log({ personaje, valores });


