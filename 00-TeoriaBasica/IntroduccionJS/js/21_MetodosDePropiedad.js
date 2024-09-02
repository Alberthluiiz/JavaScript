/* Metodos de propiedad */

const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciendo Canción: ${id}`);
  },
  pausar: function () {
    console.log("pausando...");
  },
  crearPlaylist: function(nombre) {
    console.log(`Creando la playlist: ${nombre}`);
  },
  reproducirPlaylist: function(nombre) {
    console.log(`Reproduciendo la playlist: ${nombre}`);
  }
};

reproductor.borrarCancion = function (id) {
  console.log(`Eliminando Canción: ${id}`);
};

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(1600);
reproductor.crearPlaylist('David Getta');
reproductor.reproducirPlaylist('David Getta');
