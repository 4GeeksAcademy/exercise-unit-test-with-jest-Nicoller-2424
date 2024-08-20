
const { fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');

test("Two euros should be 2.14 dollars", function() {

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(2)).toBe(2.14); 
})

test("10 dollars should be  yenes", function() {

    // Hago mi comparación (la prueba)
    expect(fromDollarToYen(10)).toBe(1490.3); 
})

test("7 Yens should be 0,0504 pounds", function() {

    // Hago mi comparación (la prueba)
    expect(fromYenToPound(7)).toBe(0.0504); })