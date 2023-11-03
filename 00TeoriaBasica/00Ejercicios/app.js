function obtenerAreaRectangulo(alto, ancho) {
    // Retornar el area de un rectángulo teniendo su altura y ancho
    // Tu código:
    resultado = alto * ancho;
    return resultado;
  }
  console.log(obtenerAreaRectangulo(5, 5));
  
  function retornarPerimetro(lado){
    //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
    //Escribe tu código aquí
    let resul = lado * 4;
    return resul;
  }
  console.log( retornarPerimetro(4) );
  
  function areaDelTriangulo(base, altura){
    //Desarrolle una función que calcule el área de un triángulo.
    //Escribe tu código aquí
    let area = (base * altura) / 2;
    return area;
  }
  console.log( areaDelTriangulo( 5, 2) );
  
  function deEuroAdolar(euro){
    //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
    //como parámetro un número de euros y calcule el cambio en dólares.
    //Escribe tu código aquí
    let equivalenciaEuros = euro * 1.20;
    return equivalenciaEuros;
  }
  console.log( deEuroAdolar(10) );
  
  
  function esVocal(letra){
    //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
    //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
    //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    // Si no es vocal, tambien debe devolver "Dato incorrecto".
    //Escribe tu código aquí

    let vocales = ['a','e','i','o','u'];
    if ( vocales.includes(letra) ) return 'Es vocal';
    return 'Dato Incorrecto';

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
  console.log( esVocal('a') );


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

    return x > y ? x : y
  }
  console.log( obtenerMayor( 10,1 ) );
  
  function mayoriaDeEdad(edad) {
    //Determinar si la persona según su edad puede ingresar a un evento.
    //Si tiene 18 años ó más, devolver --> "Allowed"
    //Si es menor, devolver --> "Not allowed"
    return edad >= 18 ? 'Allowed' : 'Not allowed'
  }
    console.log(mayoriaDeEdad(1));
    
  function conection(status) {
    //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
    //Cuando el estado es igual a 1, el usuario está "Online"
    //Cuando el estado es igual a 2, el usuario está "Away"
    //De lo contrario, presumimos que el usuario está "Offline"
    //Devolver el estado de conexión de usuario en cada uno de los casos.
    return status === 1 ? 'Online' : status === 2 ? 'Away' : 'Offline';
  }
  console.log( conection(2) );
  
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
      ingles: "Hello!"
    }

    return saludos[idioma] || "Hola!"
  }
  console.log( saludo ('aleman'));
  
  function colors(color) {
    //La función recibe un color. Devolver el string correspondiente:
    //En caso que el color recibido sea "blue", devuleve --> "This is blue"
    //En caso que el color recibido sea "red", devuleve --> "This is red"
    //En caso que el color recibido sea "green", devuleve --> "This is green"
    //En caso que el color recibido sea "orange", devuleve --> "This is orange"
    //Caso default: devuelve --> "Color not found"
    //Usar el statement Switch.
    color = color.toLowerCase()
    switch (color){
      case 'blue': return 'This is blue'
      
      case 'red': return 'This is red'

      case 'green': return 'This is green'

      case 'orange': return 'This is orange'

      default: return 'Color not found'
      
    }

  }
  console.log(colors('RED'));

  
  
  function esDiezOCinco(numero) {
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
    return numero == 10 || numero == 5;
  }
  console.log( esDiezOCinco(5) );
  
  function estaEnRango(numero) {
    // Devuelve "true" si "numero" es menor que 50 y mayor que 20
    // De lo contrario, devuelve "false"
    // Tu código:
    return numero < 50 && numero > 20
  }

  console.log(estaEnRango(30))
  console.log(estaEnRango(100))
  
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
  console.log(esEntero(24))
  
  function fizzBuzz(numero) {
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero

    return numero % 3 == 0 && numero % 5 == 0 ? 'fizzbuzz' : numero % 3 == 0 ? 'fizz' : numero % 5 == 0 ? 'buzz' : numero
  }
  console.log(fizzBuzz(0))
  
  function operadoresLogicos(num1, num2, num3) {
    //La función recibe tres números distintos. 
    //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
    //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
    //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
    //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
    //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
    if(num1 === 0 || num2 === 0 || num3 === 0) return "Error"
    if(num1 < 0 || num2 < 0 || num3 < 0) return "Hay negativos"
    if(num1 > num2 && num1 > num3 && num1 > 0) return "Número 1 es mayor y positivo"
    if(num3 > num1 && num3 > num2) return num3 + 1

    return false
  }

  console.log(operadoresLogicos(3, 2, 1))
  console.log(operadoresLogicos(1, 2, 4))
  console.log(operadoresLogicos(3, 0, 1))
  console.log(operadoresLogicos(3, 10, 1))
  
  function esPrimo(numero) {
    // Devuelve "true" si "numero" es primo
    // De lo contrario devuelve "falso"
    // Pista: un número primo solo es divisible por sí mismo y por 1
    // Pista 2: Puedes resolverlo usando un bucle `for`
    // Nota: Los números 0 y 1 NO son considerados números primos
    return numero
  }
  
  function esVerdadero(valor){
    //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
    //si su valor es true y “Soy falso” si su valor es false.
    //Escribe tu código aquí
  
  }
  
  function tablaDelSeis(){
    //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
    //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
    //Escribe tu código aquí   
    
  }
  
  function tieneTresDigitos(numero){
    //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
    //Escribe tu código aquí
    
  }
  
  function doWhile(numero) {
    //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
    //Retornar el valor final.
    //Usar el bucle do ... while.
  }