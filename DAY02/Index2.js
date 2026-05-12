let a = "Jai";
let b = "Annie";
let c = "Jackson";
console.log(`Hello ${a}, ${b} and ${c}!`);
console.log(`Length of c:${c.length}`)

function table(num){
    result="";
    for(let i=1;i<=10;i++){
        result+=`${num}x${i}=${num*i}\n`
    }
    return result;
}
console.log(table(5));

let sum = (x,y)=>(x+y);
console.log(`Sum of x&y:${sum(5,10)}`);

let arr=[1,2,3,5,"Jai"];
arr.filter(x => typeof x === "number").map(y => y*2).forEach(a => console.log("Element after x2:", a*2));

//array fns
colors = ["Black","White","Brown"];
colors.unshift("Red");
console.log(colors);
colors.shift();
console.log(colors);
colors.push("Pink");
console.log(colors);
colors.pop();
console.log(colors);
console.log(colors.length);
console.log(colors.includes("Purple"));
console.log(colors.indexOf("Purple"));
console.log(colors[3]);
console.log(colors[2]);
console.log(colors[colors.length-1]);
console.log(colors)

//reduce
const list=['10','20','30','40'];
const total = list.reduce((acc,curr)=>{return acc + curr},0);
console.log(total);

const fruitBasket = ['apple', 'banana', 'cherry', 'apple', 'apple', 'banana', 'pineapple'];
const count=fruitBasket.reduce((acc,fruit)=>{
    acc[fruit]=(acc[fruit]||0)+1;
    return acc;
},{});
console.log(count);

//splice
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(months.splice(2, 3, 'Aaryan')); 
console.log(months);

