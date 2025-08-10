
function sumofTwonumbers(num1, num2) {
    return num1 + num2;
    console.log(num1 + num2);

}
// const result = sumofTwonumbers(4,5);
// console.log("Result:",result);

console.log('Sum is:', sumofTwonumbers(4, 5));

function login(username = 'Foysal') {
    if (!username) {
        console.log(`Please Enter a Username as now the username is ${username}`);

    }
    return `${username} has just looged in`;
}

// const isLoggedin = login('foysal');
// console.log(isLoggedin);

const isLoggedin = login();
console.log(isLoggedin);






