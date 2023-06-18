console.log("Hola Mundo");

console.log("By: Alberthluiiz");


/* Tipos de variales */
var nombre = "Estamos aprendiendo JavaScript";
console.log(nombre);

/* constantes - no cambian de valor */
const constante = 5;
console.log(constante);

/* Suma de dos numeros*/
/* Definicion de variables */
var num1 = 5;
var num2 = 6;
var suma = 0;
/* Operacion */
suma = num1 + num2;
/* muestra de resultado */
console.log(suma);


/* Suma de dos numeros*/
/* Definicion de variables */
var num1 = 5;
var num2 = 6;
var suma = 0;
/* Operacion */
suma = num1 + num2;
/* muestra de resultado */
console.log("La suma de los dos numeros es: " + suma);


/* Resta de dos numeros*/
/* Definicion de variables */
var num1 = 5;
var num2 = 6;
var resta = 0;
/* Operacion */
resta = num1 - num2;
/* muestra de resultado */
console.log("La resta de los dos numeros es: " + resta);


/* Potencia*/
/* Definicion de variables */
var num1 = 2;
var num2 = 3;
var potencia = 0;
/* Operacion */
potencia = Math.pow(num1,4)-(num1/(num2+45));
/* muestra de resultado */
console.log("La restpuesta es: " + potencia);

/* Operadores Relacionales */
/* valores Booleanos true o false */
var numero1 = 2;
var numero2 = 3;
var resultado = 0;
resultado = numero1 == numero2;
console.log("La respuesta es: " + resultado);

/* Operadores Relacionales */
console.log("");
var numero1 = "2";
var numero2 = 3;
var resultado = 0;
resultado = numero1 != numero2;
console.log("La respuesta es: " + resultado);

/* Operadores Relacionales */
console.log("");
var numero1 = 5;
var numero2 = 3;
var resultado = 0;
resultado = numero1 >= numero2;
console.log("La respuesta es: " + resultado);

/* Operadores Lógicos ( O )*/
console.log("");
var a = 5;
var b = 5;
var c;
c = ( a>= b) || a > 6;
console.log("La respuesta es: " + c);
/* & */
console.log("");
var a = 5;
var b = 5;
var c;
c = ( a>= b) && a > 6;
console.log("La respuesta es: " + c);

/* Operadores de Asignación */
console.log("");
var x = 1;
var y = 3;
var z = 2;
var v = 2;
x += 10;
console.log("suma "+ x);
x -= 5;
console.log("resta "+ x);
y *= 5;
console.log("multiplicación "+ y);
z /= 5;
console.log("división "+ z);
v **= 2;
console.log("potencia "+ v);


/* Condicional IF */
console.log("");
var numero = 7;
if(numero%2==0){
    console.log("El numero [" + numero + "] es par")
}
else {
    console.log("El numero [" + numero + "] es impar")
}

/* Bucles - While*/
console.log("");
console.log("Bucle - While");
var i = 0;
while(i < 10)
{
    console.log(i);
    i+=1;
}

/* Bucles - For*/
console.log("");
console.log("Bucle con For");
for(var i = 0 ; i <= 20 ; i++){
    console.log(i)
}

/* Funciones - Conjunto de instrucciones - declaracion con VAR*/
console.log("");
console.log("Funciones con Var");
var cafeResultado = "Capuchino";

function cafetera(ingrediente1){
    if(ingrediente1 == "leche"){
        return cafeResultado;
    }
}

var tasa = cafetera("leche");
console.log(tasa);

/* Funciones - Conjunto de instrucciones - declaracion con LET*/
console.log("");
console.log("Funciones con let");
let cafeResul = "Capuchino";

function cafetera(ingrediente1){
    if(ingrediente1 == "leche"){
        let cafeResul = "Cafe expreso";
        return cafeResul;
    }
}

var tasa = cafetera("leche");
console.log(tasa);


/*Document Object Model - DOM*/

console.log("by: Luis Guillén")