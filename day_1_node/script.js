// console.log("hello World!!!");

function sum(num1, num2) {
    return num1 + num2;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
// stdin => standard input
// stdout => standard output
let num1, num2;

console.log(process.stdin);

readline.question('Give a number : ', function abc(num) {
    num1 = parseInt(num); // Ensure num1 is a number
    //num1 = num;
    readline.question('Give another number : ', num => {
     num2 = parseInt(num); // Ensure num2 is a number
        //num2 = num;
        readline.close();
        console.log(`The sum is: ${sum(num1, num2)}`); // string literal
        // `The sum is: ${sum(num1, num2)}`;
        console.log('The sum is: ' + sum(num1, num2));
    });
});
