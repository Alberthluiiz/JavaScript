// Selecciona el elemento del documento HTML con el id "display" y lo asigna a la constante display.
const display = document.querySelector("#display");

// Selecciona todos los elementos del documento HTML que son botones y los asigna a la constante buttons.
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  // Itera sobre cada elemento en la lista de botones.
  item.onclick = () => {
    // Asigna una función onclick a cada botón.
    
    if (item.id == "clear") {
      // Comprueba si el id del botón actual es "clear".
      display.innerText = "";
      // Si es así, establece el contenido de texto del elemento display en una cadena vacía para borrar su contenido.
    } else if (item.id == "backspace") {
      // Comprueba si el id del botón actual es "backspace".
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
      // Si es así, convierte el contenido de texto del elemento display en una cadena y elimina el último carácter usando el método substr.
    } else if (display.innerText != "" && item.id == "equal") {
      // Comprueba si el contenido de texto del elemento display no está vacío y el id del botón actual es "equal".
      display.innerText = eval(display.innerText);
      // Si es así, evalúa la expresión matemática representada por el contenido de texto utilizando la función eval() y actualiza el contenido de texto del elemento display con el resultado.
    } else if (display.innerText == "" && item.id == "equal") {
      // Comprueba si el contenido de texto del elemento display está vacío y el id del botón actual es "equal".
      display.innerText = "Null";
      setTimeout(() => (display.innerText = ""), 3000);
      // Si es así, establece el contenido de texto del elemento display en "Null" y luego, después de 3 segundos, restablece el contenido de texto a una cadena vacía.
    } else {
      // Si no se cumple ninguna de las condiciones anteriores.
      display.innerText += item.id;
      // Agrega el id del botón actual al contenido de texto del elemento display.
    }
  };
});


/* boton para cambiar de color */

// Seleccionar el elemento con la clase CSS "theme-toggler"
const themeToggler = document.querySelector(".theme-toggler");

// Seleccionar el elemento con la clase CSS "calculator"
const calculator = document.querySelector(".calculator");

// Variable para almacenar el estado actual del tema (oscuro o claro)
let isdark = true;

// Establecer un controlador de eventos para el evento "click" en themeToggler
themeToggler.onclick = () => {
  // Alternar la clase CSS "dark" en el elemento calculator
  calculator.classList.toggle("dark");
  
  // Alternar la clase CSS "active" en el elemento themeToggler
  themeToggler.classList.toggle("active");
  
  // Invertir el valor de la variable isdark
  isdark = !isdark;
};
