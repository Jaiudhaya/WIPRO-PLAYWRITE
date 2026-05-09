//1.student object
const student = {
    name: "John Doe",
    age: 20,
    course: "Computer Science",
}
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.course);

for (let key in student){
    console.log(`${key} : ${student[key]}`);
}

//2.count keys in an object
function countKeys(obj){
    return Object.keys(obj).length;
}
const obj1 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}
console.log(`No. of keys: ${countKeys(student)}`);
console.log(`No. of keys: ${countKeys(obj1)}`);

//3.merge two objects
const obj2 = {
    e: 5,
    f: 6
}
const merged = {...obj1, ...obj2};
console.log(merged);

//4.Convert an object into an array of keys and values. 
const keys = Object.keys(student);
const values = Object.values(student);
console.log(keys);
console.log(values);

//5.shopping cart and calculate total price
const cart = {
    item1: {name: "Milk", price: 12, quantity: 2},
    item2: {name: "Bread", price: 15, quantity: 1},
    item3: {name: "Eggs", price: 5, quantity: 12}
};
function sum(cart){
    let total = 0;
    for (let item in cart){
        total += cart[item].price * cart[item].quantity;
    }
    return total;
}
console.log(`Total: ${sum(cart)}`);
