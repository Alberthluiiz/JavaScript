// This
/* Objeto */
const reservacion = {
    nombre: 'Luis',
    apellido: 'Guillén',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);        
    }
}
const reservacion2 = {
    nombre: 'Luis',
    apellido: 'Guillén',
    total: 5000,
    pagado: false,
    informacion: function() {
        console.log(`El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`);        
    }
}

reservacion.informacion();
reservacion2.informacion();
