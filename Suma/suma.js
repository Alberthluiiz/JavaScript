const numeroUno = document.getElementById('n1');
const numeroDos = document.getElementById('n2');
const respuesta = document.getElementById('respuesta');
const calcular = document.getElementById('calcular');

calcular.addEventListener('click', realizarCalculo);

function realizarCalculo() {
  const operacionUno = parseFloat(numeroUno.value);
  const operacionDos = parseFloat(numeroDos.value);
  let resp = operacionUno + operacionDos;
  respuesta.innerText = resp;
  respuesta.style="color:orange"
}
