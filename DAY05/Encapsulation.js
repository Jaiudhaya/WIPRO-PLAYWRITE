class BankAccount{
    #balance=0; //private
    deposit(amount){
        if (amount>0){
            this.#balance+=amount;
            console.log(`Deposited: $${this.#balance}`);
        }else{
            console.log("Deposite amount must be more than 0!");
        }
    }
    withdraw(amount){
        if (amount>0 && amount<=this.#balance){
            this.#balance-=amount;
            console.log(`Withdrew: $${amount}. Current balance is $${this.#balance}`);
        }else{
            console.log("Withdrawal amount must be more than 0 and less than the balance.");
        }
    }
    getBalance(){
        return this.#balance;
    }
}
const Acc1 = new BankAccount();
Acc1.deposit(10000);
Acc1.withdraw(6000);
Acc1.balance=20000; //no change cause private (#balance)
console.log(`Final Balance: $${Acc1.getBalance()}`);

const Acc2 = new BankAccount();
Acc2.deposit(500);
Acc2.withdraw(100);
Acc2.withdraw(200);
console.log(`Final Balance: $${Acc2.getBalance()}`);


//Another eg
class passManager{
    #password="";
    
    setPass(newP){
        if(newP.length>=6){
            this.#password = newP;
            console.log("Password set successfully!");
        }else{
            console.log("Password must be atleast 6 characters.")
        }
    }
    changePass(old,newP){
        if(old===this.#password){
            this.setPass(newP);
        }else{
            console.log("Incorrect old password!");
        }
    }
    checkPass(input){
        return input === this.#password;
    }
}
const user1 = new passManager();
user1.setPass("1234"); //short
user1.setPass("user1234"); //correct
user1.changePass("12","newpassword"); //wrong old pass
user1.changePass("user1234","newpassword");
console.log(user1.checkPass("newpassword")); //true
user1.password = "123456";  //no change (private)
console.log(user1.checkPass("123456")); //false
