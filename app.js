
// one euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

 function  fromDollarToYen (valueInDollar) {
    let valueInYen = valueInDollar * 149.03;
    return valueInYen;
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}
function fromYenToPound (valueInYen) {
    let valueInPound = valueInYen * 0.0072;
    return valueInPound;
}


module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound };