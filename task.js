console.log("Hello, World!");

let varia = "Hello!";

let user = prompt("Please enter your name:");
let age = prompt("Please enter your age:");
if (user >= 18) {
    console.log(`${age}, you are eligible to vote.`);
} else {
    console.log(`${age}, you are not eligible to vote.`);
}

function calc(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

let number = 5; 
console.log(`The factorial of ${number} is: ${calc(number)}`);
