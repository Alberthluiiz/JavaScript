// Capturamos los elementos que vamos a trabajar
const menuToggle = document.querySelector(".menuToggle");
const navigation = document.querySelector(".navigation");

menuToggle.onclick = function () {
  navigation.classList.toggle("open");
};

const list = document.querySelectorAll(".list");

// Funcion para formatear el active y poner al siguiente
function activarLink() {
  list.forEach((item) => 
    item.classList.remove('active'))
  this.classList.add('active')
}

list.forEach((item) => 
    item.addEventListener('click', activarLink)
)


