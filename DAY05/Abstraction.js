class coffee{
    #waterTemp = 90;
    
    #boilWater(){
        return `Boil water to ${this.#waterTemp} degrees.`;
    }
    #grind(){
        return "Grinding beans...";
    }
    brew(){
        const boilMessage = this.#boilWater();
        const grindMessage = this.#grind();
        return `${boilMessage} ${grindMessage} and Coffee is ready!!`;
    }
}
const myCoffee = new coffee();
console.log(myCoffee.brew());

//Another eg
class pizza{
    #dough(){
        return "Preparing dough...";
    }
    #toppings(){
        return "Adding toppings...";
    }
    #bake(){
        return "Baking..."
    }
    makePizza(){
        const s1 = this.#dough();
        const s2 = this.#toppings();
        const s3 = this.#bake();
        return `${s1} ${s2} ${s3} Your Pizza is Ready!!!`;
    }
}
const myPizza = new pizza();
console.log(myPizza.makePizza());
