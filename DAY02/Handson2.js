//Guest List Formatter
let list=["Michael","Annie","Billie"];
function formatGuest(list){
    list.shift();
    let formatted = list.map(name=>`Guest:${name}`);
    return formatted.join('\n')
}
console.log(formatGuest(list));

//Logic Gate
let getHighNumber=(arr)=>{
    const threshold=Math.floor(Math.random()*50)+1;
    let result=arr.filter(item=>typeof item==="number")
    result=arr.filter(num=>num>threshold);
    return result;
}
let arr=["Hello","Hey",17,45,7,0,50,"Hi",84];
console.log(getHighNumber(arr));

//Price Calculator
let prices=["200","50","20","23"];
let handling=prices.pop();
let numbers=prices.map(price=>Number(price));
let sum=(arr)=>{
    let total=0;
    for (let num of arr){
        total+=num;
    }
    return total;
}
let total=sum(numbers);
console.log(`Total Price: ${total}`);

