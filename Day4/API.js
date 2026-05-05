//1 Cat Facts
fetch("https://catfact.ninja/fact")
  .then(res=>res.json())
  .then(data=>{
  console.log(data)
   const result = {
     fact: data.fact,
     length: data.length,
     isLong: data.length > 50? "Yes" : "No"
   };
  return result
})
.then(data=>console.log(data))
.catch(err=>console.error(err));

//2 Dogs url
fetch("https://dog.ceo/api/breeds/image/random/10")
  .then(res=>res.json())
  .then(dog=>dog.message)
  .then(arr => arr.map(url => "Dog: " + url))
  .then(console.log)
  .catch(err=>console.error("Error:",err));

//3 Agify
fetch("https://api.agify.io/?name=arjun")
  .then(r=>r.json())
  .then(obj=>({
  name: obj.name,
  age: obj.age,
  category: obj.age > 18? "Adult" : "Young"
}))
  .then(console.log)
  .catch(console.err);

//4 Genderize
fetch("https://api.genderize.io/?name=riya")
.then(res=>res.json())
.then(obj=>({
  name: obj.name,
  gender: obj.gender,
  IsItAShe: obj.gender === "female"
}))
.then(console.log)
.catch(console.err);

//5 Nationalize
fetch("https://api.nationalize.io/?name=rahul")
.then(res=>res.json())
  .then(obj => obj.country)
  .then(arr => arr.filter(c => c.probability > 0.1))
  .then(arr => arr.map(c => c.country_id))
  .then(console.log)
  .catch(console.err);

//6 Joke API
fetch("https://official-joke-api.appspot.com/jokes/ten")
  .then(r => r.json())
  .then(arr => arr.filter(j => j.type === "programming"))
  .then(console.log)
  .catch(console.err)

//7 Numbers
fetch("http://numbersapi.com/1/30/date?json")
  .then(r => r.json())
  .then(obj => ({
      fact: obj.text,
      length: obj.text.length
  }))
  .then(console.log)
  .catch(console.err);

//8 Random User
fetch("https://randomuser.me/api/?results=5")
  .then(r => r.json())
  .then(obj => obj.results)
  .then(arr => arr.map(u => `${u.name.first} ${u.name.last}`))
  .then(console.log)
  .catch(console.err);

//9 Exchange Rate
fetch("https://api.exchangerate-api.com/v4/latest/USD")
  .then(r => r.json())
  .then(obj => obj.rates)
  .then(rates => ({
      INR: rates.INR,
      EUR: rates.EUR,
      isINRHigh: rates.INR > 80 ? "Yes" : "No"
  }))
  .then(console.log)
  .catch(console.err);

//10 Universities
fetch("http://universities.hipolabs.com/search?country=India")
  .then(r => r.json())
  .then(arr => arr.filter(u => u.name.includes("Engineering")))
  .then(arr => arr.map(u => u.name))
  .then(console.log)
  .catch(console.err);





