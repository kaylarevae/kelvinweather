// Kelvin is a constant variable.
const kelvin = 0;
// Celsius is always 273 degrees less than Kelvin.
const celsius = kelvin - 273;
// A changing variable is assigned to fahrenheit so we can round it later. The mathmatical calculation to convert to celsius is shown.
var fahrenheit = celsius * (9 / 5) + 32;
// The .floor() method rounds to the nearest integer.
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);




