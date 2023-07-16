

// Creamos funcion flecha 
const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

console.warn('Not o la negación');
console.log( true ); // True
console.log( !true ); // False
console.log( !false ); // True

console.log( !regresaFalse() ); // True


console.warn( 'And' ); // True si todos los valores son verdaderos
console.log( true && true ); // true
console.log( true && !false ); // false

console.log('==================')
console.log( regresaFalse() && regresaTrue()); // False
console.log( regresaTrue() && regresaFalse()); // False


console.log('========= && =========');
regresaFalse() && regresaTrue();

console.log( ' 4 Condiciones ', true & true & true && false ); // false

console.warn( ' OR' ); // True
console.log( true || false );
console.log( false || true );

console.log( regresaTrue() || regresaFalse() );

console.log( ' 4 Condiciones ', true || true || true || false ); // true


console.warn(' Asignaciones ');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && ' Hola Mundo ' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso && true;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo' || true;

console.log({a1, a2, a3, a4, a5, });

if ( regresaFalse() && regresaTrue() &&  (true || true || true || false) ) {
    console.log('Hacer algo');
} else {
    console.log('Hacer otra cosa');
}