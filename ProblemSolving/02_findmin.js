
const array = [2, 39, 45, 20];

function findMin(arr) {
    let minNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minNumber) {
            minNumber = arr[i];
        }
    }

    return minNumber;

}

console.log(`Min number is: ${findMin(array)}`);