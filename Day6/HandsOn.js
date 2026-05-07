//The Flight Booking Data Cleaner

const rawFlights = [
    "London-Paris:150",
    "New York-Tokyo:invalid",
    "Dubai-Mumbai:450",
    "Berlin-Rome:95"
    ];
const cleaned = rawFlights
.map(flight=>{
    const [route,rawPrice] = flight.split(":");
    const [from, to] = route.split("-");
    let price = Number(rawPrice);
    if (isNaN(price)){
        price = 0;
    }
    return {
        from,
        to,
        price
    };
});
console.log("All Flights:");
console.log(cleaned);
const filtered = cleaned.filter(
    flight=>flight.price>=100 && flight.price<=500
);
filtered.sort((a,b)=> a.price - b.price);
console.log("Filtered Flights:");
console.log(filtered);
const result = JSON.stringify(cleaned,null,2);
console.log("JSON Output:");
console.log(result);

//The E-Commerce Discount Applicator

const cart = [
    {name: "Smartphone", price: 800, category: "Electronics"},
    {name: "Toaster", price: 50, category: "Home"},
    {name: "Headphones", price: 250, category: "Electronics"},
    {name: "Monitor", price: 150, category: "Electonrics"}
];
function isEligible(product){
    if(!product){
        return false;
    }
    return(
        product.category === "Electronics" &&
        product.price > 200
    );
}
function applyPromo(cart, promoCallback){
    if (!Array.isArray(cart)){
        console.log("Invalid cart data");
        return;
    }
    let discountedCount = 0;
    let totalSavings = 0;
    const updatedCart = cart.map(product=>{
        if(promoCallback(product)){
            const discount = product.price*0.10;
            const newPrice = product.price - discount;
            discountedCount++;
            totalSavings += discount;
            return {
                ...product,
                price: newPrice,
                isDiscounted: true
            };
        }
        return {
            ...product,
            isDiscounted: false
        };
    });
    console.log(`Promotion applied! ${discountedCount} item were discounted for a total saving of $${totalSavings}.`);
    setTimeout(()=>{
        console.log("Updated cart:");
        console.log(updatedCart);
    },1000);
}
applyPromo(cart,isEligible);

//The Movie Stream Analytics

const rawMovies = [
    "Inception|Sci-Fi|12000",
    "The Lion King|Animation|8000",
    "Mad Max|Action|invalid",
    "The Matrix|Sci-Fi|15000",
    "Gladiator|Action|4500"
];
const movies = rawMovies.map(movie => {
    const [name, genre, rawViews] = movie.split("|");
    let views = Number(rawViews);
    if (isNaN(views)){
        views = 0;
    }
    return{
        name,
        genre,
        views
    };
});
console.log("All Movies:");
console.log(JSON.stringify(movies, null, 2));
const filteredMovies = movies.filter(movie =>(movie.genre === "Action" || movie.genre === "Sci-Fi") && movie.views > 5000);
filteredMovies.sort((a,b)=>b.views - a.views);
console.log("Filtered Movies:");
console.log(JSON.stringify(filteredMovies, null, 2));
const result1 = JSON.stringify(filteredMovies, null, 2);
console.log("Final JSON Output:");
console.log(result1);

//The Automated Payroll Processor

const employees = [
    {id: 101, name:"Alice", salary:6000},
    {id: 102, name:"Bod", salary: 3500},
    {id: 103, name:"Carlie", salary: 5200}
];
function taxLogic(salary){
    if(salary > 5000){
        return 0.20;
    }
    return 0.10;
}
function calculatePayroll(employees, taxCallback){
    let totalNetPayout = 0;
    const processedEmployees = employees.map(employee => {
        const taxRate = taxCallback(employee.salary);
        const taxAmount = employee.salary * taxRate;
        const netSalary = employee.salary - taxAmount;
        totalNetPayout += netSalary;
        return {
            ...employee,
            netSalary: netSalary,
            status: netSalary > 4000? "Premium" : "Standard"
        };
    });
    console.log(`Payroll Processed: Total Net Payout is $${totalNetPayout} for ${employees.length} employees.`)
setTimeout(()=>{
    console.log("Processed Employees:");
    console.log(JSON.stringify(processedEmployees, null, 2));
},2000);
};
calculatePayroll(employees,taxLogic);