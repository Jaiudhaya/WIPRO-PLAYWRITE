//1.
async function fetchData<T> (url: string): Promise<T> {
    const res = await fetch(url);

    if (!res.ok){
        throw new Error("Failed to fetch data");
    }
    const data: T = await res.json();
    return data;
}

interface Album {
    userId: number;
    id: number;
    title: string;
}
async function demo() {
    const url = "https://jsonplaceholder.typicode.com/albums/1";
    const album = await fetchData<Album>(url);
    console.log(`Album ID: ${album.id}`);
    console.log(`Album Title: ${album.title}`);
}
demo();

//2.
enum Role {
    Admin = "Admin",
    User = "User",
    Guest = "Guest"
}
const PermissionMap: Record<Role, boolean> = {
    Admin: true,
    User: false,
    Guest: false
};
console.log(PermissionMap);

//3.
type TaskStatus = 'Open' | 'InPorgress' | 'Closed' | 'Archived';
function handleTask(status: TaskStatus) {
    switch (status) {
        case 'Open':
            console.log('Task is open');
            break;
        case 'InPorgress':
            console.log('Task is in progress');
            break;
        case 'Closed':
            console.log('Task is closed');
            break;
        case 'Archived':
            console.log('Task is archived');
            break;
        default:
            const check: never = status;
            return check;
    }
}
handleTask('Archived');

//4.
type folderNode = {
    name: string;
    files?: string[];
    subFolders?: folderNode[];
};
const root: folderNode = {
    name: "Root",
    files: ["idex.ts", "app.ts"],
    subFolders: [
        {
            name: "src",
            files: ["main.ts"],
            subFolders: [
                {
                    name: "components",
                    files: ["header.ts","footer.ts"]
                }
            ]
        },
        {
            name: "assets",
            files: ["logo.png"]
        }
    ]
};
console.log(root);

//5.
type MarginValue = `${number}px` | `${number}rem` | `${number}vh`;
function applyMargin(margin: MarginValue){
    console.log(`Applied margin: ${margin}`);
}
let m1: MarginValue = "10px";
let m2: MarginValue = "2rem";
let m3: MarginValue = "50vh";
//let m4: MarginValue = "60"; //invalid
applyMargin(m1);
applyMargin(m2);
applyMargin(m3);
//applyMargin(m4);

//6.
type UnwrapPromise<T> = T extends Promise<infer U> ? U:T;
 type A = UnwrapPromise<Promise<string>>;
 type B = UnwrapPromise<Promise<number>>;
 type C = UnwrapPromise<boolean>;

 async function getData(): Promise<string> {
    return "Hello";
 }

type ResultType = UnwrapPromise<ReturnType<typeof getData>>;

const value: ResultType = "Hello";
console.log(value);

//7.
type AllEvents = 'click' | 'dbclick' | 'submit'| 'reset' | 'keypress';
type MouseEvents = Extract<AllEvents, 'click' | 'dbclick'>;
type NonFormEvent = Exclude<AllEvents, 'submit' | 'reset'>;

let m11: MouseEvents = 'click';
let m12: MouseEvents = 'dbclick';
//let m13: MouseEvents = 'submit';  --> error
let n1: NonFormEvent = 'click';  
let n2: NonFormEvent = 'keypress';
//let n3: NonFormEvent = 'reset';  --> error
console.log(m11, m12, n1, n2);

//8.
function safeExecute<T>(fn: () => Promise<T>): () => Promise<T | null> {
    return async function (){
        try {
            return await fn();
        } catch (error) {
            console.error("Error:",error);
            return null;
        }
    };
}
async function FetchData(): Promise<string> {
    return "Success data";
}
const safeFetch = safeExecute(FetchData);

safeFetch().then(result => {
    console.log(result);
});

async function failFunction(): Promise<string> {
    throw new Error("Something went wrong");
}
const safeFail = safeExecute(failFunction);

safeFail().then(result => {
    console.log(result);
});

//9.
interface UserMetadata {
    createdAt: Date;
    [key: string]: string | number | boolean | Date;
}
const user: UserMetadata = {
    createdAt: new Date(),
    name: "jai",
    age: 22,
    isActive: true
};
console.log(user);

//10.
interface Car {
    make: string;
    model: string;
}
type ApiResponse<T> = {
    [K in keyof T as `DATA_${Uppercase<string & K>}`]: T[K];
};
type CarApiResponse = ApiResponse<Car>;

const carData: CarApiResponse = {
    DATA_MAKE: "Toyota",
    DATA_MODEL: "Corolla"
};
console.log(carData);