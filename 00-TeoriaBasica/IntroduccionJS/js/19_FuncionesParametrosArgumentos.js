/* Los parametros se van a pasar dentro de los parentesis */
function sumar(numero1 = 0, numero2 = 0) { /* Valores por Default */
  console.log(numero1 + numero2);
}
/* Aqui se pasa los argumentos o los valores reales */
sumar(10, 10);
sumar(3, );
sumar(5, 10);
console.warn('Segunda Funcion');

const sumar2 = function (n1, n2) {
  console.log(n1 + n2);
};
sumar2(5, 10);

