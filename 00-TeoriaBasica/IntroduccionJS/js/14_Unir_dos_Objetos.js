const producto = {
    nombreProducto: 'Monitor 20 pulgadas',
    precio: 300,
    disponible: true,
};

const medidas = {
    peso: '1kg',
    medidas: '1m'
}

console.warn('Unir dos objetos sin modificarlos');

const nuevoProducto = { ...producto, ...medidas}
console.warn('Objetos sin unir');
console.log(producto);
console.warn('Objetos unido sin nodificarlos');
console.log(nuevoProducto);

