// Seleccionar el elemento con la clase CSS '.menuToggle'
const menuToggle = document.querySelector('.menuToggle');

// Seleccionar el elemento con la clase CSS '.navigation'
const navigation = document.querySelector('.navigation');

// Agregar un evento de clic al elemento 'menuToggle'
menuToggle.onclick = function() {
  // Alternar la clase CSS 'open' en el elemento 'navigation' al hacer clic
  navigation.classList.toggle('open');
};

// Seleccionar todos los elementos con la clase CSS '.list'
const list = document.querySelectorAll('.list');

// Definir la función 'activarLink' para resaltar visualmente el elemento activo
function activarLink() {
  // Eliminar la clase CSS 'active' de todos los elementos de la lista
  list.forEach((item) => item.classList.remove('active'));
  // Agregar la clase CSS 'active' al elemento en el que se hizo clic
  this.classList.add('active');
}

// Agregar un evento de clic a cada elemento de la lista
list.forEach((item) => item.addEventListener('click', activarLink));
