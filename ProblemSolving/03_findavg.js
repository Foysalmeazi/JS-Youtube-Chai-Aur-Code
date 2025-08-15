
const array = [2, 39, 45, 20];

function findAvg(arr) {
    let sum =0, average;
    for (let i = 0; i < arr.length; i++) {
        sum =sum + arr[i];
    }

    average = sum/arr.length;
    return average;

}

console.log(`Average is: ${findAvg(array)}`);