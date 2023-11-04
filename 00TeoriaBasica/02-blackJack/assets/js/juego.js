/**
 * 2C = Two of clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */
/**Creamos las cartas en un arreglo */
let deck         = [];
const tipos      = [ 'C', 'D', 'H', 'S' ]
const especiales = [ 'A', 'J', 'Q', 'K' ]

// Esta funcion crea un nuevo deck (Baraja)
const crearDeck = () => {
    for (let i = 2; i <= 10; i++ ){
        for ( let tipo of tipos ){
            deck.push( i + tipo );
        }
    }

    for ( let tipo of tipos){
        for( let esp of especiales){
            deck.push( esp + tipo );
        }
    }
    //console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}
crearDeck();


// Esta funcion me permite tomar una carta

const perdirCarta = () => {
    console.log( carta );   // Carta debe de ser de la baraja
    return '2C';
}