
// Two types of data based on how data store

// 1. Primitive Type data (Call By Value)
// 2. Non-Primitive Type data (Call By Reference)

// 1. Primitive Type data (7 Types)

// 1. String, 2. Number, 3. Boolean, 4. Null, 5. Undefined, 6. Symbol, 7. BigInt

//String 

// const Country = 'Bangladesh';
// const isLogged = true;
// const age = null;
// const mobile = undefined;
// const bigNumber  = 1234564567345688765n;
// let ID = Symbol(12345);
// let ID2 = Symbol(12345);

// console.log(ID==ID2);
// console.log(typeof ID);

// 1. Non - Primitive Type data (3 Types)

// 1. Array, 2. Object, 3. Function

// Array

const array1 = [1,2,3,4,5,6];

const obj1 = 
{
    name: 'Hasnat',
    party: 'NCP'
}

let result = function (newarray,newobj) 
{
console.log(newarray);
console.log(newobj);
} 


result(array1, obj1);

// ------------------------------------------------

// 2 types of memory
// 1. Stack Memory, 2. Heap Memoryy

// Stack Memory  - Store Premitive Data
// Heap Memory - Store Non-Premitive Data

// Premitive

function sum(a,b)
{
    a =a+2;
    b =b+2;
    console.log("The result inside the function: "+a);
    console.log("The result inside the function: "+b);
    
    
    const result =a+b;
    console.log(result);
    
}

let c=10, d=20;
console.log("The result outside the function: "+c);
console.log("The result outside the function: "+d);


sum(c,d);

// Call by valuse pass the copy of original value.
// That is why the original value of c and d has not changed 
// although the value of a and b has changed inside the function

// Non-primitve

function arrayDisplay(arr2)

{
    arr2.push(100);
    console.log(arr2);
    
}

let arr1 =[10,20,30,40];
arrayDisplay(arr1);
console.log(arr1);

// Note: Call by reference change the original value. 
// I have pushed 100 in the arr2 but it has changed the original value of arr1.






