
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






