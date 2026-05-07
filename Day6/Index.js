function person(name){
    this.name = name;
}
person.prototype.greet = function(){
    console.log("Hello,",this.name);
}
const user1 = new person("Alice");
const user2 = new person("Bob");
user1.greet();
user2.greet();
console.log(Object.getPrototypeOf(user1)===person.prototype);
console.log(user1.greet === user2.greet);