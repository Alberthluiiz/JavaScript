function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  resultado = alto * ancho;
  return resultado;
}
console.log(obtenerAreaRectangulo(5, 5));

function retornarPerimetro(lado) {
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  let resul = lado * 4;
  return resul;
}
console.log(retornarPerimetro(4));

function areaDelTriangulo(base, altura) {
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  let area = (base * altura) / 2;
  return area;
}
console.log(areaDelTriangulo(5, 2));

function deEuroAdolar(euro) {
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  let equivalenciaEuros = euro * 1.2;
  return equivalenciaEuros;
}
console.log(deEuroAdolar(10));

function esVocal(letra) {
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí

  let vocales = ["a", "e", "i", "o", "u"];
  if (vocales.includes(letra)) return "Es vocal";
  return "Dato Incorrecto";

  /* if ( letra.length == 1){
        if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u' ) {
            return 'Es vocal';
        } else {
            return 'Dato incorrecto';
        }
    } else {
        return 'Dato incorrecto';
    } */
}
console.log(esVocal("a"));

/**===================================================================================== */
/* Seccion 3 */

// No cambies los nombres de las funciones.
function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  // if(x > y) {
  //   return x
  // } else {
  //   return y
  // }
  
  return x > y ? x : y;
}
console.log(obtenerMayor(10, 1));

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  return edad >= 18 ? "Allowed" : "Not allowed";
}
console.log(mayoriaDeEdad(1));

function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico.
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  return status === 1 ? "Online" : status === 2 ? "Away" : "Offline";
}
console.log(conection(2));

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  const saludos = {
    aleman: "Guten Tag!",
    mandarin: "Ni Hao!",
    ingles: "Hello!",
  };
  
  return saludos[idioma] || "Hola!";
}
console.log(saludo("aleman"));

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  color = color.toLowerCase();
  switch (color) {
    case "blue":
      return "This is blue";
      
      case "red":
        return "This is red";
        
        case "green":
          return "This is green";

    case "orange":
      return "This is orange";
      
      default:
        return "Color not found";
      }
    }
    console.log(colors("RED"));
    
    function esDiezOCinco(numero) {
      // Devuelve "true" si "numero" es 10 o 5
      // De lo contrario, devuelve "false"
      // Tu código:
      return numero == 10 || numero == 5;
    }
    console.log(esDiezOCinco(5));
    
    function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  return numero < 50 && numero > 20;
}

console.log(estaEnRango(30));
console.log(estaEnRango(100));

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código

  return Number.isInteger(numero);
}
console.log(esEntero(24));

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero

  return numero % 3 == 0 && numero % 5 == 0
    ? "fizzbuzz"
    : numero % 3 == 0
    ? "fizz"
    : numero % 5 == 0
    ? "buzz"
    : numero;
}
console.log(fizzBuzz(0));

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos.
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  /* Seccion 3 */
  //ninguna de las condiciones anteriores, retornar false.
  if (num1 === 0 || num2 === 0 || num3 === 0) return "Error";
  if (num1 < 0 || num2 < 0 || num3 < 0) return "Hay negativos";
  if (num1 > num2 && num1 > num3 && num1 > 0)
    return "Número 1 es mayor y positivo";
  if (num3 > num1 && num3 > num2) return num3 + 1;

  return false;
}

console.log(operadoresLogicos(3, 2, 1));
console.log(operadoresLogicos(1, 2, 4));
console.log(operadoresLogicos(3, 0, 1));
console.log(operadoresLogicos(3, 10, 1));

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso" */
  /* Seccion 3 */
  //ero primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos

  /* return (numero / numero === 1 && numero / 1 === numero) ? true : false; */
  // hay que hacer un contador de cuantas veces es divisibles el numero
  // el numero lo dividimos hasta que alcanze su propio valor

 

  // entonce un condicional que verificque que la parametro numero* Seccion 3 */

  // no sea 1 o 0
  if (numero === 1 || numero === 0) return false;
  for (let i = 2; i <= numero; i++) { // esta mal esta parte. vera esta condicion se tiene que cumplir dos vece cuando es 1 y cuando da el mismo numero cuando da falso y es lo que vemos hasta el infinito y mas haya.....
    if (i !== numero && (numero % i) === 0) return false    /* Seccion 3 */
  }
  
  // los numero primos solo divisible por el 1 y entre ello mismo 

  return true;
}
console.log(esPrimo(13));

/**
 * 1 false
 * 2 true
 * . * 8 false
 */

function esVerdadero(valor) {
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero”
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  // adelante compareños 
  
  // hace falta un condicional refactorizar -- pues nose 
  

  return valor ? "somos los mejores 7v7" : "say false";

    /* /* if ( valor === true ){
      return 'Soy verdadero';
    } 
    else if(valor === false){
      return 'Soy falso';
    } */

}

console.log( esVerdadero( true ));

function tablaDelSeis() {
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.* Seccion 3 */
  //Escribe tu código aquí
}

function tieneTresDigitos(numero) {
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false./Escribe tu código aquí
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
}




/**===================================================================================== */
/* Seccion 4 */

// No cambies los nombres de las funciones. // el array es le parametro  <- !@``_@! -> ya veras que tanto escriblo lo memorizara 

// array de pruebas  
let array1 = ['Hola','2','3','4','adios']; 

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  // return array.at(0);
  return array[0];
}
console.log( devolverPrimerElemento(array1) );

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array pedor
  // Tu código: 
  // return array.at(-1)
  return array[array.length - 1]

}
console.log( devolverUltimoElemento(array1))

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

console.log( obtenerLargoDelArray([10, 2, 5, 8, 6, 58 ,4 ,7 ]) )


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array[i]
  //elemto al principio del array  bug estoy  A 
  // Tu código: aaaaaa
  let arrayNuevo = [];
  for (let i = 0; i < array.length ; i++) {
    arrayNuevo.push( array[i] + 1 )
  }
  return arrayNuevo
}
console.log( incrementarPorUno( [1, 2, 3]) );


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  /**-------------------------- */
  
  array.push(elemento)

  return array
  
  // hay se ve que funciona 
}

console.log(agregarItemAlFinalDelArray(array1,"work!!"))

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array 
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)

  return array
}

console.log(agregarItemAlComienzoDelArray(array1, "heyyy!"));


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'  este ???
  // Tu código:

  let oracion = palabras.join(" "); // THENK YOU

  // for(let i = 0; i < palabras.length; i++)
  //   oracion = oracion + palabras[i] chao !!!  BUENO 

  return oracion

  // otra opción nefasque :) => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  // congratulection -> this problem done wiht exit 
}

console.log(dePalabrasAFrase(['Hello', 'world!']))


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}









