

let a = 10;

if ( a >= 10 ){
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menos a 10');
}
/* console.log('Fin de programa'); */

const hoy = new Date(); //{}
let dia = hoy.getDate();  // 0: Domingo, 1: Lunes, 2:Martes.....

console.log({ dia });

if ( dia === 0 ){   
    console.log('Domingo');
} else {
    if ( dia === 1 ){
        console.log('Lunes');
    } else {
        console.log('No es Lunes ni Domingo');
    }
}