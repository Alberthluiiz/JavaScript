console.warn('Objero Math');

let resultado;

console.warn('Pi');
resultado = Math.PI;
console.log(resultado);

console.warn('Round - Redonde un numero con decimales');
resultado = Math.round(2.65);
console.log('2.65');
console.log(resultado);

console.warn('Ceil - Siempre redondea hacia arriba');
resultado = Math.ceil(2.62);
console.log('2.5');
console.log(resultado);

console.warn('floor - Siempre redondea hacia abajo');
resultado = Math.floor(2.62);
console.log('2.5');
console.log(resultado);

console.warn('Raiz Cuadrada');
resultado = Math.sqrt(144);
console.log('144');
console.log(resultado);

console.warn('abs, pasa un númeor negativo a un número positivo');
resultado = Math.abs(-2001);
console.log('-2001');
console.log(resultado);

console.warn('min, toma el número menor de toda la lista');
resultado = Math.min( 3, 5, 1, 8, 2, 10);
console.log('3, 5, 1, 8, 2, 10');
console.log(resultado);

console.warn('max, toma el número mayor de toda la lista');
resultado = Math.max( 3, 5, 1, 8, 2, 10);
console.log('3, 5, 1, 8, 2, 10');
console.log(resultado);

console.warn('random, genera números aleatorios');
resultado = Math.random();
console.log(resultado);

console.warn('random, genera números aleatorios especificando un tamaño');
resultado = Math.floor( Math.random() * 500);
console.log(resultado);

