//***************************Number Library******************************** */

const price  = new Number(10);
console.log(price);
console.log(price.toString().length);

const result =  113.456787645;
console.log(result.toPrecision(4));

const amount = 10000000000000000000000000000;
console.log(amount.toLocaleString('en-IN'));



//***************************Math Library******************************** */

console.log(Math);
console.log(Math.random().toFixed(2));

let num = 0.1 + 0.2;
console.log(num);
let rounded = Math.round(num * 100) / 100;
console.log(rounded); // 0.3







