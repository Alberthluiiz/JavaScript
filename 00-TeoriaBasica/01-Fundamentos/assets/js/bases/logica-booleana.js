const regresaTrue = () => {
    console.log('Regresa True');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa False');
    return false;
}

console.warn('Not o la negación');

console.log( true );    // true
console.log( !true );    // false
console.log( !false );   // true

console.log( !regresaFalse() ); // true

console.warn(' AND ');  // True si todos los valores son verdaderos
console.log( true && true );    // True
console.log( true && !false );    // True

console.log( '======================' );
console.log( regresaFalse() && regresaTrue() ); // False
console.log( regresaTrue() && regresaFalse() ); // False

console.log( '=========== &&  ===========' );
regresaFalse() && regresaTrue()

console.log( true && true && true && false );   // false

console.warn(' OR ');  // True, si uno de los dos es verdadero sera verdadero, si los dos son falsos sera falso
console.log( true || false);    // True
console.log( false || false);   // False

console.log( regresaTrue() || regresaFalse() ); // True
console.log( '4 Condiciones', true || true || true || false );   // True




console.warn('Asignaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

const a1 = false && "Hola Mundo" && 150;    // ?
const a2 = 'Hola' && 'Mundo' && soyFalso;
const a3 = soyFalso || 'Ya no soy falso'
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso de nuevo ' || true;
const a5 = soyFalso || soyUndefined || regresaTrue() || 'Ya no soy falso de nuevo ' || true;

console.log({ a1, a2, a3, a4, a5, });


if ( regresaFalse() && regresaTrue() && true || false || true  ) {
    console.log('hacer algo');
} else {
    console.log('Hacer otra cosa');
}