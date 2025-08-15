

// const readline = require("readline").createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// readline.question("Enter your score: ", (input) => {
//     const score = Number(input); // convert to number
//     console.log(`Score entered: ${score}`);
//     readline.close();
// });


const score = 78;

switch (true) {
    case (score >= 50 && score < 60):
        console.log(`Grade is B as you got ${score}`);
        break;

    case (score >= 60 && score < 70):
        console.log(`Grade is A- as you got ${score}`);
        break;
    case (score >= 70 && score < 80):
        console.log(`Grade is A as you got ${score}`);
        break;
    case (score >= 80 && score < 100):
        console.log(`Grade is A+ as you got ${score}`);
        break;
    default:
        console.log(`Failed as you got ${score}`);
        break;

}
