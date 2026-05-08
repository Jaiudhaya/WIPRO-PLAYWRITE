//Variable Hosting
console.log(greet); //undefined msg
var greet = "Hello, World!";
console.log(greet);

//Function Hosting
sayHi();
function sayHi() {
console.log('Hello, World!');
}
//o/p: Hello, World!

//var sayHi = () => {
//console.log('Hello');
//}

//PROTOTYPE

// Every object --> Object
const car = {
    brand: "Tesla",
//    start: () => console.log("VroomVroom")
}
 
function start() {
    console.log("VroomVroom...")
}
 
const c1 = new start();
const c2 = new start();
 
start.prototype.stop = function() {
    console.log("Stop");
}
c1.stop();
c2.stop();
 
// car {start} --> prototype {stop}
// c1 --> start
// c2 --> start
// c1.stop();
 
const animal = { eats: true };
const rabbit = Object.create(animal); // creates a new object rabbit with prototype animal
rabbit.carrot = () => console.log("He is eating carrot");
console.log(rabbit.eats); // inherted from animal //TRUE
console.log(rabbit.hasOwnProperty('eats')) //FALSE
console.log(rabbit.hasOwnProperty('carrot')) //TRUE
console.log(rabbit.toString())


//Reverse and Sort - Array Method
const arr = [1, 2, 3, -1];
arr.reverse();
arr.sort();
for(let e of arr) { // in -> index, of -> value
    console.log(e);
}