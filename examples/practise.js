// oefenopdracht 

// 1. Maak een functie die een array van getallen als argument neemt en de som van alle getallen in de array teruggeeft.
function sumArray(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

module.exports = sumArray;