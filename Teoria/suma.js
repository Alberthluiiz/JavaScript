
const num1 = document.getElementById("n1");
const num2 = document.getElementById("n2");
const respuesta = document.getElementById("res");
const btncalcular = document.getElementById("calcular");

/* Evento */
btncalcular.addEventListener('click', calcular);

/* Funcion */
function calcular (){
    const op1 = parseFloat(num1.value);
    const op2 = parseFloat(num2.value);
    let res = op1 + op2;
    respuesta.innerText = res;
    respuesta.style="color:blue";
}


