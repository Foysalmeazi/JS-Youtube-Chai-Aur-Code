// ================================
// Example: Truthy & Falsy in JavaScript
// ================================

const value = 1;

console.log("===== Truthy & Falsy Check =====");
if (value) {
    console.log(`✔ The value "${value}" is a TRUTHY value.`);
} else {
    console.log(`✘ The value "${value}" is a FALSY value.`);
}

console.log("\n===== Known Falsy Values =====");
console.log("false, 0, -0, 0n (BigInt zero), null, undefined, NaN");

console.log("\n===== Known Truthy Values =====");
console.log("true, 1, 'false', '0', ' ' (non-empty string), [], {}");

// --------------------
// Checking empty array
// --------------------
console.log("\n===== Array Check =====");
const arr = [];
if (arr.length === 0) {
    console.log("✔ The array is EMPTY.");
} else {
    console.log("✘ The array has elements.");
}

// --------------------
// Checking empty object
// --------------------
console.log("\n===== Object Check =====");
const obj1 = {
    name: 'Hasib',
    age: 28
};
if (Object.keys(obj1).length === 0) {
    console.log("✔ The object is EMPTY.");
} else {
    console.log("✘ The object is NOT empty.");
}

// ------------------------------
// Nullish Coalescing Operator ??
// ------------------------------
console.log("\n===== Nullish Coalescing Operator (??) =====");

// If fiendname is null or undefined, fallback to "Ramim"
let fiendname = null;
let displayName = fiendname ?? "Ramim";
console.log(`fiendname: ${displayName}`); // "Ramim"

// fiendname2 is not null/undefined, so it stays as "Hasib"
let fiendname2 = "Hasib";
let displayName2 = fiendname2 ?? "Ramim";
console.log(`fiendname2: ${displayName2}`); // "Hasib"

// Example with multiple fallback values
const val1 = undefined;
const val2 = 20;
const result = val1 ?? val2 ?? 15;
console.log(`Result from val1 ?? val2 ?? 15: ${result}`); // "20"
