const crearPersona = ( nombre, apellido) => ({ nombre,apellido });

const persona = crearPersona( 'Luis ', 'Guillén');
console.log( persona );

function imprimeArgumentos() {
    console.log( arguments );
}

imprimeArgumentos(10, true, false, 'Luis', 'Hola');

const imprimeArgumentos2 = (...arguments) => {
    console.log( arguments );
}
imprimeArgumentos2(10, true, false, 'Luis', 'Hola');

const imprimeArgumentos3 = ( edad, ...arguments ) => {
    console.log( edad, arguments );
}
imprimeArgumentos3(10, true, false, 'Luis', 'Hola');

const imprimeArgumentos4 = ( edad, ...arguments ) => {
    return arguments
}
const argumentos = imprimeArgumentos4(10, true, false, 'Luis', 'Hola');
console.log({ argumentos });

const [ casado, vivo, nombre, saludo ] = imprimeArgumentos4(10, true, false, 'Luis', 'Hola');
console.log({ casado, vivo, nombre, saludo });

/* Creamos un Objeto */

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Iroman',
    vivo: false,
    /* edad: 40, */
    trajes: ['Mark I', 'Mark V', 'Hulbuster'],
};

/* const imprimePropiedades = ( personaje ) => {
    console.log( personaje.nombre );
    console.log( personaje.codeName );
    console.log( personaje.vivo );
    console.log( personaje.edad );
    console.log( personaje.trajes );
};
imprimePropiedades(tony); */

/* Desestructuracion de elementos */
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 22, trajes }) => {
    edad  
    console.log({ nombre });
    console.log({ codeName });
    console.log({ vivo });
    console.log({ edad });
    console.log({ trajes });
}
imprimePropiedades(tony);
