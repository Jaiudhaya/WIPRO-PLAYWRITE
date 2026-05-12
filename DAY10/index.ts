enum Role {
    Admin = "Admin",
    User = "User",
    SuperUser = "SuperUser"
}
enum Priviledge {
    Read = "Read",
    Write = "Write",
    Delete = "Delete" 
}
type Emp = { id: number | string, name: string, role: Role};  //keyof -> "id" | "name" | "role"
type Admin = { priviledge: Priviledge[]};
type SuperUser = Emp & Admin;

let list: (Emp | Admin | SuperUser)[] = []; //any -> anything
function addEmp(emp: Emp | Admin | SuperUser): void {
    list.push(emp);
}
function getEmp(index: number){
    console.log(list[index]);
}
addEmp({id: 10, name: "Jai", role: Role.User});
addEmp({id: "abc", name: "Udhaya", role: Role.User});
addEmp({id: 20, name: "Annie", role: Role.Admin, priviledge: [Priviledge.Read, Priviledge.Write]});
getEmp(0);
getEmp(1);
getEmp(2);


const points = {x: 10, y: 20};
type pointKeys = keyof typeof points; //Result "x" | "y"

function getProperty<T, K extends keyof T> (obj: T, key: K){
    return obj[key];
}
const user = {id: 1, username: "Jai", email: "xyz@gmail.com"}
console.log(getProperty(user, "email"));
console.log(getProperty(user, "username"));
console.log(getProperty(user, "id"));
