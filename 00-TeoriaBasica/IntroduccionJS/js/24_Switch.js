/* const metodoPago = "Tarjeta"; */
/* const metodoPago = "bitcoin"; */
/* const metodoPago = "Cheque"; */
const metodoPago = "Efectivo";

switch (metodoPago) {
  case "Tarjeta":
    console.log("Pago con tarjeta");
    break;
  case "Cheque":
    console.log("Tu pago es con Cheque");
    break;
  case "Efectivo":
    console.log("Tu pago es en Efectivo");
    break;
  default:
    console.log("Aun no has cancelado");
    break;
}
