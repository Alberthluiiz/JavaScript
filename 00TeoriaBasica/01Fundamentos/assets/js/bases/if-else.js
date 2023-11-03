

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

/* Ejercicios */
dia = 6;

const diasLetras = {
    0: ()=> 'domingo - 0',
    1: ()=> 'Lunes - 1',
    2: ()=> 'Martes - 2',
    3: ()=> 'Miercoles - 3',
    4: ()=> 'Jueves - 4',
    5: ()=> 'Viernes - 5',
    6: ()=> 'Sabado - 6',
}

/* console.log( diasLetras[dia] || 'Día no definido' ); */
console.log( diasLetras[dia]() );


diaArreglo = 6;

const diasLetrasArreglo = ['domingo - 0','Lunes - 1','Martes - 2','Miercoles - 3','Jueves - 4','Viernes - 5','Sabado - 6',];
console.log( diasLetrasArreglo[diaArreglo]);

