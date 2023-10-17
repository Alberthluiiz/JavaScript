console.log("Hola Mundo");

/* -----    ASIGNACIÓN DE VARIABLES     ----- */

var varialble =  "Hola Mundo, esta es una asignación de variables";
console.log(varialble);

/* La constante es un valor que no va a cambiar */
const constante = 5;
console.log(constante);

console.log(" Suma de Dos números");
var numero1 = 5, numero2 = 20, res;

res = numero1 + numero2;

console.log("   " + numero1);
console.log(" + " + numero2);
console.log("--------");
console.log("La suma es: " + res);

/* OPERADORES RELACIONALES */
/* 
  Operador                Comparación
  ==              Igual que
  ===             Estrictamente igual que 
  !=              Distinto que 
  !==             Estrictamente Distinto que 
  <               Menor que 
  <=              Menor o igual que 
  >               Mayor que 
  >=              Mayor o igual que 
  */
 
 
 /* OPERADORES LÓGICOS */
/*  
   Operador         Comparación
    And &           Se cumple a y b               
    Or ||           Se cumple a o b
    Not !           No a
 */

    /* OPERADORES DE ASIGNACIÓN */
console.log(" ----- Operadores de Asignación -----");
var a = 2;
a += 5;
console.log(a);

/* CONDICIONAL IF */

console.log("----- Condicional If -----");
var numCondicional = 8;

console.log("El numero ingresado es: " + numCondicional);

if( numCondicional == 7) 
{
    console.log("Si es 7");
}
else if (numCondicional == 8 )
{
    console.log("Es igual a 8");
}
else {
    console.log("No lo es");
}

/* BUCLES */

console.log("----- BUCLES CON WHILE -----");
var i = 0;
while (i < 10)
{
    i += 1;
    console.log(i);
}

console.log("----- BUCLES CON FOR -----");

for (var i = 0; i <= 10; i+=1){
    console.log(i);
}

console.log("----- FUNCIONES -----");
var resultadoCafetera = "capuchino";
function cafetera(ingrediente1){
    if (ingrediente1 == "leche")
    {
        return resultadoCafetera;
    }
}

var tasa = cafetera ("leche");
console.log(tasa);







