/* Capturamos la respuesta */
const respuesta = document.getElementById("resp");
const btnejecutar = document.getElementById("ejecuta");
/* Declaración de arreglos */
let frutas = ["Manzana", "Frutilla", "Mango", "Pera"];
/* Evento */
btnejecutar.addEventListener('click',iniciar);

/* funcion */
function iniciar(){
    /* Recorremos elementos */
    frutas.forEach(function(item, index, array){
        respuesta.innerText=array;
    });
}