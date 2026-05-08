//Swap with temp var
let a = 12;
let b = 16;
let temp = a;
a=b;
b=temp;
console.log("a:",a,"b:",b);

//without
let a1 = 12;
let b2 = 16;
a1=a1+b2;
b2=a1-b2;
a1=a1-b2;
console.log("a1:",a1,"b2:",b2);

//Type Checker
let input="Jai"
function type(input){
    if (typeof(input)=="number"){
        console.log(`${input} is a number`);
    }else if (typeof(input)=="string"){
        console.log(`${input} is a string`);
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