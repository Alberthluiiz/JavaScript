

const luis = {
    nombre: 'Luis',
    edad: 22, 
    imprimir(){
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
    }
}

const alberto = {
    nombre: 'alberto',
    edad: 22,
    imprimir(){
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
    }
}

// luis.imprimir();
// Esto se debe de crear con la palabra New - para navegadover viejos con mas de 8 años

function Persona(nombre, edad) {
    console.log('Se ejecutó esta línea');

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function() {
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
    }
}

const maria = new Persona('María', 18);
const melissa = new Persona('Melissa', 22);
//console.log( maria );
maria.imprimir();
melissa.imprimir();