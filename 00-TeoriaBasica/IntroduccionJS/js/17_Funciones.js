/* Funciones */

/* Declaracion de funcion */
/* Se declara y luego se manda a llamar la funcnio */

function sumar() {
    console.log(10 * 10);
}

sumar();

/* Expresion de la funcion */
const multiplicacion = function() {
    console.log(3 * 3);
    
}

multiplicacion();

/* IIFE, proteje las variables de otros archivos*/
(function(){
    console.log('Esta es una funcion IIFE');
})();
