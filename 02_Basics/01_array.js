const numbers = [1, 2, 3, 4, 5, 6]; // Initialize an array of numbers

// Array Methods Demonstration
// Using push, pop, unshift, and shift methods on arrays

console.log('-------------Array Name: Numbers Start--------');
console.log('Original Array: ' + numbers); // Display original numbers array

numbers.push(10); // Adds 10 at the end of the array
console.log(numbers); // [1, 2, 3, 4, 5, 6, 10]

numbers.pop(); // Removes the last element (10)
console.log(numbers); // [1, 2, 3, 4, 5, 6]

numbers.unshift(20); // Adds 20 at the beginning of the array
numbers.shift(); // Removes the first element (20), restoring original state

console.log('-------------Array Name: Numbers End--------');

console.log('-------------Array Name: myarray2 Start--------');

const myarray2 = new Array('Avengers', 'Warrior', 'Fade'); // Create array using Array constructor
console.log("Original Array: " + myarray2); // ['Avengers', 'Warrior', 'Fade']

myarray2.push('Supras'); // Adds 'Supras' to the end
console.log(myarray2); // ['Avengers', 'Warrior', 'Fade', 'Supras']

myarray2.pop(); // Removes the last element ('Supras')
console.log(myarray2); // ['Avengers', 'Warrior', 'Fade']

myarray2.unshift('Supras'); // Adds 'Supras' at the beginning
console.log(myarray2); // ['Supras', 'Avengers', 'Warrior', 'Fade']

myarray2.shift(); // Removes the first element ('Supras')
console.log(myarray2); // ['Avengers', 'Warrior', 'Fade']

console.log('-------------Array Name: myarray2 End--------');
