//Defaukt parameter
function greet(name = "Guest"){
    console.log(`Welcome, ${name}!`);
}
greet("Jai");
greet("Udhaya");
greet();

//spread operator
const nums = [1, 2, 3, 4, 5];
const newNum = [...nums, 6, 7, 8];
console.log(newNum);

const obj = {name: "jai"};
const update = {...obj, age: 22};
console.log(update);

//rest operator
const cal = {
    sum: (...nums) => nums.reduce((a, b) => a + b, 0),
}
console.log(cal.sum(2, 3, 44, 5));

//Destructuring
const [first, second, third] = ["Apple", "Banana", "Cherry"]; //position based extraction
const [one, two, three] = [1, 2, 3, 4, 5, 6];
console.log(first, second, third);
console.log(one, two, three);

const person = {name: "Jai", age: 22, city: "Chennai"}; //key based extraction
console.log{name, age};
