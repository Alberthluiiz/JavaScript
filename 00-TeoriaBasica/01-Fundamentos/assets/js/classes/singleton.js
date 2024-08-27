

class Singleton {

    static instancia;   // undefined
    nombre = ''; // Propiedades

    constructor( nombre = '' ) {
        
        if( !!Singleton.instancia ) {
            return Singleton.instancia;
        }

        Singleton.instancia = this;
        this.nombre = nombre;

        // return this;
    }

}

// Inicializamos la clase
const instanciaUno = new Singleton( 'IronMan' );
const instanciaDos = new Singleton( 'Spiderman' );
const instanciaTres = new Singleton( 'Black Panther' );

console.log( `Nombre en la instancia 1 es: ${ instanciaUno.nombre }` );
console.log( `Nombre en la instancia 2 es: ${ instanciaDos.nombre }` );
console.log( `Nombre en la instancia 3 es: ${ instanciaTres.nombre }` );