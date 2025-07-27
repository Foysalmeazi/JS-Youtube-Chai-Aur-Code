// ---------------------------
// Two types of data based on how data is stored:
// ---------------------------

// 1. Primitive Type data (Call By Value)
// 2. Non-Primitive Type data (Call By Reference)

// ---------------------------
// Primitive Types (7 Types)
// ---------------------------
// 1. String
// 2. Number
// 3. Boolean
// 4. Null
// 5. Undefined
// 6. Symbol
// 7. BigInt

// Examples:
// const Country = 'Bangladesh';
// const isLogged = true;
// const age = null;
// const mobile = undefined;
// const bigNumber = 1234564567345688765n; // BigInt
// let ID = Symbol(12345);
// let ID2 = Symbol(12345);

// console.log(ID == ID2); // false — each Symbol is unique
// console.log(typeof ID); // symbol

// ---------------------------
// Non-Primitive Types (3 Types)
// ---------------------------
// 1. Array
// 2. Object
// 3. Function

// Example of Array and Object:
const array1 = [1, 2, 3, 4, 5, 6];

const obj1 = {
    name: 'Hasnat',
    party: 'NCP'
};

// Function that receives an array and an object (non-primitives)
let result = function (newarray, newobj) {
    console.log(newarray); // Prints array
    console.log(newobj);   // Prints object
};

result(array1, obj1); // Passing non-primitive types (by reference)


// ---------------------------
// Memory Allocation in JavaScript
// ---------------------------
// 1. Stack Memory — used for Primitive types (copy of the value)
// 2. Heap Memory — used for Non-Primitive types (reference to the value)

// ---------------------------
// Example: Stack Memory (Primitive)
// ---------------------------

function sum(a, b) {
    a = a + 2;
    b = b + 2;
    console.log("The result inside the function: " + a);
    console.log("The result inside the function: " + b);

    const result = a + b;
    console.log(result); // Sum of modified a and b
}

let c = 10, d = 20;

console.log("The result outside the function: " + c); // 10
console.log("The result outside the function: " + d); // 20

sum(c, d);

// ➤ Primitive types are passed **by value**, meaning original `c` and `d` remain unchanged.


// ---------------------------
// Example: Heap Memory (Non-Primitive)
// ---------------------------

function arrayDisplay(arr2) {
    arr2.push(100); // Modify array by reference
    console.log(arr2); // Modified array
}

let arr1 = [10, 20, 30, 40];

arrayDisplay(arr1);
console.log(arr1); // Also shows modified array

// ➤ Non-primitive types are passed **by reference**, so changes inside the function affect the original array.
