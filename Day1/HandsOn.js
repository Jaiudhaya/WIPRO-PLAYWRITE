//Swap with temp var
let a = 12;
let b = 16;
let temp = a;
a=b;
b=temp;
console.log("a:",a,"b:",b);

//without
let a = 12;
let b = 16;
a=a+b;
b=a-b;
a=a-b;
console.log("a:",a,"b:",b);

//Type Checker
let input="Jai"
function type(input){
    if (typeof(input)=="number"){
        console.log("This is a number");
    }else if (typeof(input)=="string"){
        console.log("This is a string");
    }else{
        console.log("Invalid");
    }
}
console.log(type(input));

//Initials Creator
let fullname="John Doe";
let name=fullname.split(" ");
console.log(name[0][0],name[1][0]);

//Cleaner
let str=" Javascript is fun  ";
let clean = str.trim();
console.log(clean.toLowerCase())

//Grocery List
let cart=["Flour","Oil","cheese"];
cart.pop();
cart.push("Milk");
console.log(["eggs"].concat(cart))

//
let num = [10, 20, 30, 40, 50];
console.log(num.includes(30));
console.log(num.indexOf(50));