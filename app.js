// Tasas de conversión
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07,  // us dollar
    "GBP": 0.87,  // british pound
}

// 1. De Euro a Dólar
const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}

// 2. De Dólar a Yen
const fromDollarToYen = function(valueInDollar) {
    let valueInEuro = valueInDollar / 1.07; 
    return valueInEuro * 156.5; 
}

// 3. De Yen a Libra
const fromYenToPound = function(valueInYen) {
    let valueInEuro = valueInYen / 156.5; 
    return valueInEuro * 0.87; 
}

const suma = (a, b) => {
    return a + b;
}

module.exports = { suma, fromEuroToDollar, fromDollarToYen, fromYenToPound };