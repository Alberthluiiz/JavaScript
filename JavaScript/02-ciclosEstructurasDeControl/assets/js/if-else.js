


let a = 10;

if ( a >= 10) { // undefined, null , una asignacion
    console.log('A es mayor o igual a 10');
} else { 
    console.log(' A es meno a 10');
}

// console.log('Fin del programa');
/* otro ejercicio */
const hoy = new Date(); // {}
let dia = hoy.getDay(); // 0: Domingo, 1: Lunes, 2: Martes

console.log({dia});

if ( dia === 0 ) {
    console.log('Domingo');
} else if ( dia === 1 ) {
    console.log('Lunes');

    // if ( dia === 1 ) {
    //    console.log('Lunes');
    // } else { 
    //    console.log('No es lunes ni domingo');
    // }
} else if ( dia === 2 ) {
    console.log('Martes');
} else {
    console.log('No es lunes, martes ni domingo');
}

// Sin usar If Else, o Switch, unicamente Objetos o Arreglos
dia = 6; // 0: Domingo, 1: Lunes, 2: Martes...

// Objetos 
const diasLetras = {
    0: 'domingo', 
    1: 'lunes', 
    2: 'martes', 
    3: 'miércoles', 
    4: 'jueves', 
    5: 'vieres', 
    6: 'sabado',
}

// Arreglos
const diasLetras2 = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'vieres', 'sabado',];

// Dia de la semana 
console.log( diasLetras2[dia] || ' Dia no definido');

