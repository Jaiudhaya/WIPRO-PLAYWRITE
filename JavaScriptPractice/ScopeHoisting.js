//1.predict output of variable hoisting examples
console.log(a); //undefined
var a = "Hello";
console.log(a); //Hello

//2.create examples showing block scope using let
let A = 1;
let B = 2;
function ab(){
    let A = 10;
    let B = 20;
    console.log("Inside function:", A, B); //10 20
}
ab();
console.log("Outside function:", A, B); //1 2

//3.closure behavior
function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}
const counter = outer();
counter(); //1
counter(); //2

//eg:
let sum = 0; // 2
function f() {
    function increment() {
        sum++;
        
        function inner2() {
            sum++;
            console.log(sum);
        }
        return inner2();
    }
    return increment();
}
console.log(sum); // 0
f();   //2
console.log(sum); // 2
 


//4.Create nested functions and access outer variables.
function outer1(){
    let name = "Annie";
    function inner1(){
        console.log(`Hello, ${name}!`);
    }
    inner1();
}
outer1();

//5.Debug a program with incorrect variable scoping
function debug(){
    for (let i=0; i<5; i++){
        setTimeout(function(){
            console.log(i); 
        }, 1000); 
    }
}
debug();  // This will print 0,1,2,3,4 after 1 second due to block scope of let. 
          // If var was used, it would print 5 five times.

