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
