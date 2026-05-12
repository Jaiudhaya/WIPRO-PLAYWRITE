//inheritance
class user{
    constructor(name){
        this.name = name;
    }
    login(){
        console.log(`${this.name} has logged in!`);
    }
}

class admin extends user{
    constructor(name,role){
        super(name);
        this.role=role;
    }
    login(){
        super.login();
        console.log(`${this.name} has the role of ${this.role}!`);
    }
}
const user1 = new user("Alice");
const user2 = new admin("Bob","Super admin");
user1.login();
user2.login();

//Another eg
class student{
    constructor(name){
        this.name=name;
    }
    study(){
        console.log(`${this.name} is studying`);
    }
}
class graduate extends student{
    constructor(name,degree){
        super(name);
        this.degree=degree;
    }
    study(){
        //super.study(); ->printing from parent which is not wanted in this case
        console.log(`${this.name} is pursuing ${this.degree}.`)
    }
}
const s1 = new student("Annie");
const s2 = new graduate("Billie","Masters");
s1.study();
s2.study();