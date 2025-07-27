// // Dates

// // const myDate = new Date();
// // console.log(typeof myDate);

// // console.log(myDate);
// // console.log(myDate.toString());
// // console.log(myDate.toDateString());
// // console.log(myDate.toISOString());
// // console.log(myDate.toLocaleDateString());


//const myCreatedDate = new Date(2025,10,23,5,3);
let myCreatedDate = new Date();
console.log(myCreatedDate);


console.log(myCreatedDate.toString());
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.getTime());


let mystamp = Date.now();
console.log(mystamp);
console.log(Math.floor(mystamp/1000));

let myCreatedDate1 = new Date('July 12, 2025');
console.log('The date is:'+ myCreatedDate1);


// Declare Local String as Object

myCreatedDate.toLocaleString('default', {
       weekday: 'long',

    }
)












