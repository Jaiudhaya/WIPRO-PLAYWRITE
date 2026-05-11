let name = "TypeScript";
console.log(name);

let name1: string = "Diana";
let result: number | string;
result = 45;
result = "HiHi";
console.log(name1, result);
 
function add(a: number, b: number): string {
    return "Sum: " + (a + b);
}
 
console.log(add(2, 3));
 