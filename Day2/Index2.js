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