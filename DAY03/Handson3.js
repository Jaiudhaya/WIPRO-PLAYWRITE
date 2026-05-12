//1.Logging Names
const names = ["Annie","Billie","Shamone"];
//using function
names.forEach(function(name){
    console.log(`Hello, ${name}`);
});
//using Arrow fnc
names.forEach(name=>console.log(`Hello, ${name}`));

//2.Temperature conversion
const celsius = [0,10,20,30];
const fahren = celsius.map(temp=>temp*1.8+32);
console.log(fahren);

//3.Finding Adults
const users = [
  { name: 'Li', age: 16 },
  { name: 'Dan', age: 22 },
  { name: 'Sarah', age: 17 }
];
const adults = users.filter(user=>user.age>=18);
console.log(adults);

//4.String Length
const names1 = ["Annie","Billie","Shamone","Mike","Jack"];
function longNames(arr){
    return names1.filter(str=>str.length>5);
}
console.log(longNames(names1));

//5.Total cost
const prices = [19.99, 5.50, 3.99, 25.00];
const total = prices.reduce((sum,price)=>sum+price,0);
console.log(total);

//6.Counting Occurrences
const fruits = ['apple', 'banana', 'orange', 'apple', 'grape', 'apple'];
const count = fruits.reduce((sum,fruit)=>{
    return fruit == 'apple'? sum+1 : sum;
},0);
console.log(count);

//7.Array Transformation
const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers.filter(num => num % 2 === 0).map(num => num * num);
console.log(result);

//5.Object Extraction
const products = [
  { id: 1, title: 'Laptop' },
  { id: 2, title: 'Mouse' }
];
const title=products.map(name=>name.title);
console.log(title);

//9.The average
let scores = [85, 90, 78, 92, 88];
const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log(average);

//10.Flattening
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat);

