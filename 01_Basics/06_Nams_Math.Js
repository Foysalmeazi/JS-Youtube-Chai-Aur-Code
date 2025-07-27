//*************************** Number Library ********************************/

// Creating a Number object with value 10
const price = new Number(10);
console.log(price); // Output: [Number: 10]

// Convert number to string and check the length of the string
console.log(price.toString().length); // Output: 2 ("10" has two characters)

// Define a decimal number
const result = 113.456787645;

// Format the number to a precision of 4 significant digits
console.log(result.toPrecision(4)); // Output: "113.5"

// Very large number — scientific notation might be used in console
const amount = 10000000000000000000000000000;

// Format the number using Indian number system with commas
console.log(amount.toLocaleString('en-IN')); // Output: "10,00,00,00,00,00,00,00,00,00,00,000"



//*************************** Math Library ********************************/

// Print the Math object to show available methods and constants
console.log(Math);

// Generate a random number between 0 and 1, and format it to 2 decimal places
console.log(Math.random().toFixed(2)); // Output: e.g., "0.87"

// Demonstrate floating-point precision issue in JavaScript
let num = 0.1 + 0.2;
console.log(num); // Output: 0.30000000000000004 (not exactly 0.3 due to binary floating-point)

// Round
