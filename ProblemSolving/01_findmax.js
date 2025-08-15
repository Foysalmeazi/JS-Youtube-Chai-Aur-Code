const obj1 = array = [2, 39, 45, 20]

function findMax(arr) {
    let maxNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxNumber = arr[i];
        }
    }
    return maxNumber;
}


console.log(`Max number is ${findMax(obj1)}`)