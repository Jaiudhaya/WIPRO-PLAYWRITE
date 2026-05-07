function person(name){
    this.name = name;
}
person.prototype.greet = function(){  // injected into person function
    console.log("Hello,",this.name);
}
const user1 = new person("Alice");
const user2 = new person("Bob");
user1.greet();
user2.greet();
console.log(Object.getPrototypeOf(user1)===person.prototype);
console.log(user1.greet === user2.greet);

function car(brand){
    this.brand = brand;
}
car.prototype.drive = function(){
    console.log(this.brand, "is driving.");
}
const car1 = new car("BMW");
car1.drive();


///Callback
function greetUser(name, callback) {
    console.log('Hello ' + name);
    callback();
}
 
function sayGoodbye() {
    console.log('Goodbye!');
}
 
greetUser('Annie', sayGoodbye);
 
function doforeach(e) {
    console.log(e);
}
 
const doeach = e => console.log(e);
[1, 2, 3].forEach(doeach); // callback | forEach is a higher order function (HOF)
[1, 2, 3].forEach(e => console.log(e)); // anonymous callback
 

 
//STACK & HEAP 
//stack
let age = 25; 
let name = "Aryan";
//heap
let user = { 
    name: "Jai",
    age: 22
}


//HandsOn Q1 Answer:
const rawFlights = [
"London-Paris:150",
"Paris-Berlin:abc",
"New York-Tokyo:invalid",
"Dubai-Mumbai:450",
"Berlin-Rome:95",
"India-Dubai:501"
];
 
function cleanFlightData(flights) {
    return flights.map(str => {
        const parts = str.split(":");
        const route = parts[0];
        const price = parts[1];
 
        const cities = route.split("-");
        const from = cities[0];
        const to = cities[1];
 
        // console.log(from, to, price);
        // if(typeof price === "undefined" || isNaN(Number(price))) {
        //     return {
        //         err: "Invalid price for route " + route
        //     };
        // }
        return {
            from: from,
            to: to,
            price: Number(price)
        }
    })
}
 
const cleanFlights = cleanFlightData(rawFlights);
cleanFlights
    .filter(f => {
        if(typeof f.price === "undefined" || isNaN(Number(f.price))) {
            f.price = 0
        }
    });
const finalFlights = cleanFlights.filter(f => f.price >= 100 && f.price <= 500);
finalFlights.sort((f1, f2) => f1.price - f2.price);
console.log(finalFlights);

///SPREAD OPERATOR
const a = [1, 2, 3];
const b = [3, 4, 5];
 
let c = [...a, ...b, 10];
 
const obj = {
    name: "abc"
}
const obj3 = {
    age: 20
}
 
const obj4 = {...obj, ...obj3};
console.log(obj4)
// for (let i = 0; i < a.length; i++) {
//     c.push(a[i]);
// }
// for (let i = 0; i < b.length; i++) {
//     c.push(b[i]);
// }
console.log(c)
 
