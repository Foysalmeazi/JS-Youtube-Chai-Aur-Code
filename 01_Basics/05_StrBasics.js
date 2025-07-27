// Declare two string variables
const str1 = "Abdullah";
const str2 = "Al Foysal";

// Declare a number and another string
const age = 20;
const address = 'I live in Australia';

// Template literal (commented out) - combines variables into one string
// console.log(`My name is ${str1} ${str2}, Age: ${age} and ${address}`);

// Create a new String object (not usually necessary; primitive strings work fine)
const strname = new String('Foysal Abdullah');

// Get the total length of the string
const length = strname.length; // Output: 16

// Split the string into an array using space as the delimiter
const splitStr = strname.split(' '); // ['Foysal', 'Abdullah']
console.log(splitStr);

// Access first and last name using array indexes
const firstName = splitStr[0]; // 'Foysal'
const lastName = splitStr[1];  // 'Abdullah'

// Get the character at the 9th index (0-based index)
const charIs = strname.charAt(9); // Output: 'd'

// Display the results using a template literal
console.log(`The length of this String is ${length} and the first name is ${firstName} and the 9th index char is ${charIs}`);
