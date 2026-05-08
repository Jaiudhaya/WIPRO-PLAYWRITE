//1. Swap
let a = 2;
let b = 3;
a=b+a;
b=a-b;
a=a-b;
console.log("Swapped: a:",a,"b:",b);

//2. Type Checker
let val = "Hello!";
function checkType(val){
    if(typeof(val)=="number"){
        console.log("This is a number");
    }else if (typeof(val)=="string"){
        console.log("This is a string");
    }else if (typeof(val)=="boolean"){
        console.log("This is a boolean");
    }else if (typeof(val)=="null"){
        console.log("This is null");
    }else{
        console.log("Undefined");
    }
}
//console.log(checkType) --> gives undefined message because the function is not called, it is just being printed.
(checkType(val));

//3. Temperature Converter
const celcius = 25;
const fahrenheit = celcius*1.8+32;
console.log(`Temperature in Fahrenheit is: ${fahrenheit}`);

//4.
const num1 = 2;
const num2 = 3;
console.log(`Sum: ${num1+num2}`);
console.log(`Difference: ${num1-num2}`);
console.log(`Product: ${num1*num2}`);
console.log(`Quotient: ${num1/num2}`);
console.log(`Remainder: ${num1%num2}`);

//5. Age Calculator
let birthYear = 2006;
let currentYear = new Date().getFullYear();
let age = currentYear - birthYear;
console.log(`Your age is: ${age}`);
