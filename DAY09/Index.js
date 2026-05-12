//Default parameters
function greet(name = "Guest") { // default params
    console.log(`Welcome ${name}!`);
}

greet("Jai")
greet("Udhaya")
greet()


//Spread operator
const num = [1, 2, 3, 4, 5]; 
const newNum = [...num, 6, 7, 8];
console.log(newNum);

const obj = {name: "Jai"};
const updated = {...obj, age: 22};
console.log(updated);


//Rest operators
const cal = { 
    sum: (...nums) => nums.reduce((a, b) => a + b, 0), // rest parameters
}
console.log(cal.sum(1, 2, 3, 4, 5));


//DECONSTRUCTOR
const [first, second, third] = ["Jai", "Udhaya", "Annie"]; // pos-based extraction
const [one, two, ...three] = [1, 2, 3, 4, 5];
console.log(first, second, third);
console.log(one, two, three)

const { name, age } = {name: "Jai", age: 22}; // key-based extracted
console.log(name, age);