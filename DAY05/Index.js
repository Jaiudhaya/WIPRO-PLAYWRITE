//Stringify & Parse

getTodos().then(data => console.log(data));

const obj = {
    name: "Jai",
    age: 22,
    city: "Chennai"
}
 
console.log(JSON.stringify(obj)); // object -> string 
 console.log(JSON.parse('{"name":"Aaryan","age":25,"city":"New York"}')); // string -> object

const time = setTimeout (()=>{
    console.log("Data received");
},2000);
console.log("test");

clearTimeout(time); //stops it before it runs

const times = setInterval (()=>{
    console.log("Runnig...");
},2000);

clearInterval(times); //stops that repetition

async function getData() {
    const sum = 2 + 2;
    return await new Promise((resolve, reject) => {  //waits
        if(2 < 3) {
            setTimeout(() => {
                resolve("Data received");
            }, 2000);
        } else {
            reject('not working')
        }
    });
}
 
async function getTodos(url) {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos"); // cursor is blocked in this line
    data = data.json();
    return data;
}
 
getTodos().then(data => console.log(data));