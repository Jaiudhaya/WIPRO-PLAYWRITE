//3. call back based calculator
function calculator(a,b,operation){
    setTimeout(() => {
        let result = operation(a,b);
        console.log(`Result: ${result}`);
    }, 1000);
}
function add(x,y){
    return x+y;
}
function sub(x,y){
    return x-y;
}
function mul(x,y){
    return x*y;
}
function div(x,y){
    return x/y;
}
calculator(10,5,add);
calculator(10,5,sub);
calculator(10,5,mul);
calculator(10,5,div);


//2.built a countdown timer
function timer(sec){
    let count = sec;
    let interval = setTimeout(function(){
        console.log(count);
        count--;
        if (count >=0){
            setTimeout(arguments.callee, 1000); 
        } else{
            console.log("Time's up!");
        }
    }, 1000);
}
timer(5); 


//1.Create a delayed greeting message using setTimeout. 
function delay(){
    setTimeout(function(){
        console.log("Hello, World!");
    },7000);
}
delay();


//4.Simulate food ordering system using callbacks. 
setTimeout (()=>{
    function order(food, callback){
    console.log(`Ordering ${food}...`);
    setTimeout(() => {
        console.log(`${food} is ready!`);
        callback();
    },2000);
}
order("Pizza", function(){
    console.log("Enjoy your pizza!");
});
},8000);

