// kelvin value
const kelvin = 0;

// celsius value
const celsius = kelvin - 273;

// farenheit value
let farenheit = celsius * (9 / 5) + 32;

// farenheit value rounded down
farenheit = Math.floor(farenheit);

console.log(`The temperature is ${farenheit} degrees Fahrenheit.`);
