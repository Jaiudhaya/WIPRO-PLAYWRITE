//1.Greatest of 3 numbers
function greatest(a,b,c){
    if(a>=b && a>=c){
        return a;
    } else if (b>=a && b>=c){
        return b;
    } else {
        return c;
    }
} 
console.log(`Greatest: ${greatest(10,30,20)}`); //returns string
console.log("Greatest:", greatest(5,15,10)); //returns number
console.log("Greatest:", Math.max(10,30,20)); 

//2.Palindrome check
function isPalindrome(str){
    const cleaned = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    const reversed = cleaned.split('').reverse().join('');
    return cleaned === reversed;
}
console.log("It is a palindrome:", isPalindrome("Madam"));

//3.reusable function for currency conversion
function currency(amt, from, to){
    const rates = {
        USD: 1,
        EUR: 0.85,
        JPY: 110
    }
    return amt * rates[to] / rates[from];
}
console.log(`Converted amount: ${currency(100, "USD", "EUR")}`);
console.log(`Converted amount: ${currency(200, "EUR", "JPY")}`);

//4.function that accepts array and returns even numbers only
function even(arr){
    return arr.filter(num=> num%2 ==0);
}
console.log(even([1,2,3,4,5,6,7,8,9,10]));

//5.calculator using functions for add, subtract, multiply, and divide
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
console.log(`Addition: ${add(10,20)}`);
console.log(`Subtraction: ${sub(10,20)}`);
console.log(`Multiplication: ${mul(10,20)}`);
console.log(`Division: ${div(10,20)}`);

//
const calc = {
    add: (a,b) => a+b,
    sub: (a,b) => a-b,
    mul: (a,b) => a*b,  
    div: (a,b) => a/b
};
console.log(calc.add(10,20));
console.log(calc.sub(10,20));

//
const calc1 = {
    sum: (...op) => op.reduce((acc, curr) => acc + curr, 0),
    sub: (...op) => op.reduce((acc, curr) => acc - curr, 0),
    mul: (...op) => op.reduce((acc, curr) => acc * curr, 1),
    div: (...op) => op.reduce((acc, curr) => acc / curr, 1),
};
 
console.log(calc1.sum(5, 5, 10, 20));
 
//const calc = {
//    sum: (...op) => op.reduce((acc, curr) => acc + curr, 0),
//   sub: (...op) => op.reduce((acc, curr) => acc - curr, 0),
//    mul: (...op) => op.reduce((acc, curr) => acc * curr, 1),
//    div: (...op) => op.reduce((acc, curr) => acc / curr, 1),
//};
//function calculator(operation, ...operands) {
//    return operation(...operands);
//}
//console.log(calculator(calc.sum, 1, 2, 3))
 