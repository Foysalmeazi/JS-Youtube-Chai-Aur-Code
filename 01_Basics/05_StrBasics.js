
const str1 = "Abdullah";
const str2 = "Al Foysal";

const age =20;
const address = 'I live in Australia';

//console.log(`My name is ${str1} ${str2}, Age: ${age} and ${address}`);

const strname = new String ('Foysal Abdullah');

const length = strname.length;

const splitStr = strname.split(' ');
console.log(splitStr);

const firstName = splitStr[0];
const lastName = splitStr[1];
const charIs = strname.charAt(9);



console.log(`The length of this String is ${length} and the first name is ${firstName} and the 9th index char is ${charIs} `);
