/* Definición de funciones tradicionales */
function saludar() {
    console.log('Hola Mundo, esta es una funcion tradicional');
}
saludar();

/* Función Anonima, no se puede reutilizar */
const saludar2 = function() {
    console.log('Hola Mundo, esta es una función anonima');
}
saludar2();

/* Definición de funcion con argumento */
function saludarArgumento( nombre ){
    console.log('Hola ' + nombre);
}
saludarArgumento('Luis Guilén, esta es una funcion con argumeto');

function funcionSaludarConArgumento( nombre ){
    console.log( arguments );   
    console.log('Hola ' + nombre);
}
funcionSaludarConArgumento( 'Luis Guillen', 22 ,true, 'Quito');

/* Funciones de flecha */
const funcionSaludarConFlecha = () => {
    console.log('Hola, esta es una funcion flecha');
}
funcionSaludarConFlecha();
/* Funcion de flecha con algumento */
const saludarFlechaConArgumento = nombre =>{
    console.log('Hola, ' + nombre);
};

saludarFlechaConArgumento('Luis Guillén ' + 'esta es una funcion flecha con argumento');


/* Funciones de flecha con argumentos */
const saludarFlecha2 = nombre =>{
    console.log( 'Hola, Flecha' + nombre );
};

saludarFlecha2( 'Silvana' + 'esta es una funcion flecha con argumento' );



function sumar( a ,b ){
    console.log('Suma de dos números');
    return a+b;
}
console.log( sumar(1,2) );

const sumar2 = (x,y) => x+y;
console.log(sumar2(2,2));

function getAleatorio() {
    return Math.random();
}
console.log( getAleatorio() );

const getAleatorio2 = () => Math.random();    
getAleatorio2();
console.log( getAleatorio2());


const nombreInvertido = () => {
    console.log('luis');
    console.log('siul');
    String.retu
}

nombreInvertido();
