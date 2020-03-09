let flight = 418.12;
let hotel = 113.85;
let car = 99.99;
const TAX_RATE = 0.0805;
let subtotal, tax, total;

//flight+hotel
subtotal = flight+hotel;
displayTaxAndTotal("Flight + hotel",subtotal);

//flight+car
subtotal = flight+car;
displayTaxAndTotal("Flight + car",subtotal);

//flight+hotel+car
subtotal = flight+hotel+car;
displayTaxAndTotal("Flight + hotel + car",subtotal);

function displayTaxAndTotal(strItems, subtotal) {
tax = subtotal * TAX_RATE;
total = subtotal + tax;
console.log(strItems+"= $"+ subtotal.toFixed(2));
console.log("tax = $"+tax.toFixed(2));
console.log("total = $"+total.toFixed(2));
console.log("----------------------");
}