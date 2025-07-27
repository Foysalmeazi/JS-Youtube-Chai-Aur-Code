// -------------------------
// Simple For Loop Example
// -------------------------

let num = 10; // Set the upper limit of the loop
for (let i = 1; i <= num; ++i) {
    console.log(i); // Prints numbers from 1 to 10
}

// -------------------------
// Post-Increment vs Pre-Increment
// -------------------------

let x = 3;
// Post-increment: x++
// First assigns the current value of x to result, then increments x
let result = x++;
console.log(result); // Output: 3 (original value), x is now 4

let y = 3;
// Pre-increment: ++y
// First increments y, then assigns the incremented value to result2
let result2 = ++y;
console.log(result2); // Output: 4 (y is incremented before assignment)
