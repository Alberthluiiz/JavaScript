const elMayor = (a,b) => {
    return (a > b) ? a : b;
}
console.log( elMayor(10,15) );

/* Simplificado a una sola linea */

const elMayorReducido = (a,b) => (a > b) ? a : b;
console.log(elMayorReducido(20,15 ) );

const tieneMenbresia = ( miembro ) => ( miembro ) ? '2 Dólares' : '10 Dólares'
console.log( tieneMenbresia( true ) );

const amigo = true;
const amigosArr = [
    'Peter',
    'Tony',
    'Dr. Strange',
    amigo ? 'Thor' : 'Loki',
    elMayor(10, 15)
]
console.log( amigosArr );

const nota = 100;    // A+ a B+
const grado = nota >= 95 ? 'A+' :
              nota >= 90 ? 'A' :
              nota >= 85 ? 'B+' :
              nota >= 80 ? 'B' :
              nota >= 75 ? 'C+' :
              nota >= 70 ? 'C' : 'F'
console.log( {nota, grado} );