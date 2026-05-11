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


//INTERFACE & ENUM:
interface person {
    id: number;
    name: string;
    age: number;
    role: Role; //enum
    isAdmin?: boolean; // optional property ?
}
interface person {
    email: string //merge
}
enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}
const person1: person = {
    id: 1,
    name: "Diana",
    age: 25,
    role: Role.Admin,
    email: "diana@gamil.com"
}
const person2: person = {
    id: 2,
    name: "Annie",
    age: 30,
    role: Role.User,
    email: "annie@gmail.com"
}
console.log(person1, person2);

//TUPLES
let coordinates: [number, number] = [23.45567, 45.67890];
console.log(coordinates);

let user: [number, string] = [1, "Diana"];
console.log(user);

//array difference eg:
let arr: number[] = [1, 2, 3, 4, 5];
console.log(arr);

//GENERICS:
interface Bag<T> {
    content: T;
} 
const stringBag: Bag<string> = { content: "Book" };
const numberBag: Bag<number> = { content: 6 };
console.log(stringBag, numberBag);


//class generic
class storage<T> {
    private items: T[] = [];

    addItem(item:T): void{
        this.items.push(item);
    }
    getItem(index: number): T{
        return this.items[index]!; // ! is used to assert that the value is not null or undefined
    }
}
const names = new storage<string>();
names.addItem("Diana");
names.addItem("Annie");
names.addItem("Lily");
console.log(names.getItem(0), names.getItem(1), names.getItem(2));
 