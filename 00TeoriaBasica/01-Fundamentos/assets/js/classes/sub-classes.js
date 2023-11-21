

class Persona {

    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log( this.nombre ); // Undefined
        console.log( 'Hola a todos, soy un método stático' );
    }

    nombre  = '';
    codigo  = '';
    frase   = '';
    comidad = '';

    constructor(nombre = 'Sin nombre', codigo = 'Sin Codigo', frase = 'Sin frase') {
        
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase  = frase;

        Persona._conteo++;
    }

    //Get y Set 
    // Set ->   Establecer un valor
    // Get ->   

    set setComidaFavorita( comida ){    // Usualmente el set resive un solo argumento
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita(){    // Recuperar un valor

        return `La comida favorita de ${ this.nombre } es ${ this.comida }`;
    }


// Metodos
    quienSoy() {    // De esta manera creamos un Metodo 0 argumentos
        console.log(`Soy ${ this.nombre } y mi identidad es ${ this. codigo }`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${ this.codigo} dice: ${ this.frase }`);
    }

}

class Heroe extends Persona {
    clan = 'Sin Clan';

    constructor( nombre, codigo, frase ) {
        super( nombre, codigo, frase );
        this.clan = 'Los Avengers'
    }

    quienSoy() {
        console.log( `Soy ${ this.nombre }, ${ this.clan }` );
        super.quienSoy();
    }
}

const spiderman = new Heroe('Peter Parket', 'Spider', 'Soy tu amigable vecino Spiderman');
// const spiderman = new Heroe();
console.log( spiderman );
spiderman.quienSoy();