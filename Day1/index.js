let a = 12;
let b = 17;

let str = "Hello!!!";

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

console.log("String:", str);
console.log("Length of string:", str.length);
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());
console.log("Substring (0-5):", str.substring(0, 5));

console.log("a > b:", a > b);
console.log("a < b:", a < b); 
console.log("a == b:", a == b);
console.log("a != b:", a != b);
console.log("a >= b:", a >= b);
console.log("a <= b:", a <= b);

let obj = {
    name: "Jai",
    age: 22,
    city: "Chennai"
}
console.log("Object:", obj);
console.log("Name:", obj.name);
console.log("Age:", obj.age);
console.log("City:", obj.city);

let l = 12;
var v = 6;

{
    let l = 10;
    var v = 20;
    console.log("Inside block, l:", l); 
    console.log("Inside block, v:", v); 
}

console.log("Outside block, l:", l); 
console.log("Outside block, v:", v);

let i = 0;
let j = 1;

if(i > j) {
    console.log("i is greater");
} else {
    console.log("j is greater");
}

let choice = "A";

switch(choice) {
    case "A":
        console.log("Choice is A");
        break;
    case "B":
        console.log("Choice is B");
        break;  
    default:
        console.log("Invalid choice");
}