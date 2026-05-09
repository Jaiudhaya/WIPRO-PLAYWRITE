//1.star pyramid
let rows = 5;
for (let i=1; i<=rows; i++){
    let pattern = "".repeat(rows - i) + " *".repeat(i);
    console.log(pattern);
}
for (let i=1; i<=rows; i++){
    let pattern = " ".repeat(rows - i) + " *".repeat(i);
    console.log(pattern);
}

//2.Multiplication table
let num = 5;
for (let i=1; i<=10; i++){
    console.log(`${num} X ${i} = ${num*i}`);
}

//3.sum of even numbers between 1 and 100
let sum = 0;
for (let i=1; i<=100; i++){
    if(i%2===0){
        sum += i;
    }
}
console.log(sum);

//4.prime numbers between 1 and 100
for (let i=2; i<=100; i++){
    let isPrime = true;
    for (let j=2; j<=Math.sqrt(i); j++){
        if(i%j === 0){
            isPrime = false;
            break;
        }
    }
    if(isPrime){
        console.log(i);
    } 
}  

//5.number guessing game.
//var prompt = require('prompt-sync')();
//function random() {
// //   return parseInt(prompt("Enter a number between 1 and 10: "));
//}
//const guessNum = Math.floor(Math.random()*10)+1;
//console.log("Guess the number!");
//const num1 = random();
//if(guessNum === num1){
//    console.log("Congratulations! You guessed the number.");
//} else{
//    console.log(`Sorry! The correct number was ${guessNum}.`);
//}