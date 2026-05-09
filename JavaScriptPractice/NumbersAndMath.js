//1.Random Number
let random = Math.random()*100;
console.log(Math.floor(random));

//2.Check prime
function isPrime(num){
    if (num <= 1) return false;
    for (let i=2; i<=Math.sqrt(num); i++){
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(17));

//3.Factorial using loops
function factorial(n){
    let result = 1;
    for (let i=1; i<=n; i++){
        result *= i;
    }
    return result;
}
console.log(factorial(5));

//4.Fibonacci till n
function fibonacci(n){
    let fib = [0, 1];
    for (let i=2; i<n; i++){
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib;
}
console.log(fibonacci(10));

//5.Armstrong Number
function isArmstrong(num){
    let strNum = num.toString();
    let sum = 0;
    for (let i=0; i<strNum.length; i++){
        sum += Math.pow(parseInt(strNum[i]), strNum.length);
    }
    return sum === num;
}
console.log(isArmstrong(153));