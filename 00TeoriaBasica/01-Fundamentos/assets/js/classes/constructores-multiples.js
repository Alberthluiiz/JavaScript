class Persona {

    // MEtodo Estatico
    static porObjeto( { nombre, apellido, pais } ){
        return new Persona( nombre, apellido, pais );
    }

    constructor( nombre, apellido, pais) {
        this.nombre     = nombre;
        this.apellido   = apellido;
        this.pais       = pais;
    }

    // Creamos un metodo
    getInfo() {
        console.log( `Info: ${ this.nombre }, ${ this.apellido}, ${ this.pais}` );
    }
}

const nombre1   = 'Luis',
      apellido1 = 'Guillén',
      pais1     = 'Ecuador';

const alberth = {
    nombre: 'Alberth',
    apellido: 'Yaucan',
    pais: 'Estados Unidos',
}
// Nueva instancia de una clase
const persona1 = new Persona( nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto( alberth );

persona1.getInfo();
persona2.getInfo();

