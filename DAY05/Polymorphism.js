class shapes{
    draw(){
        console.log("Draw a Shape!");
    }
}
class circle extends shapes{
    draw(){
        console.log("Draw a circle!");
    }
}
class square extends shapes{
    draw(){
        console.log("Draw a Square!");
    }
}
const shape = [new circle(),new square()];
shape.forEach(shapes=>shapes.draw());

//Another eg
class payment{
    pay(){
        console.log("Processing payment...");
    }
}
class upi extends payment{
    pay(){
        console.log("Paid using UPI");
    }
}
class card extends payment{
    pay(){
        console.log("Paid using Card");
    }
}
class cash extends payment{
    pay(){
        console.log("Paid using Cash");
    }
}
const payments = [new upi(),new card(), new cash()];
payments.forEach(p=>p.pay());