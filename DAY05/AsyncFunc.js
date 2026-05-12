//1.CatFacts
async function getCatFact() {
  try {
    const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();

    const result = {
      fact: data.fact,
      length: data.length,
      isLong: data.length > 50 ? "Yes" : "No"
    };

    console.log(result);
  } catch (err) {
    console.error("Error:", err);
  }
}
getCatFact();


//2.DogUrl
async function getDogs() {
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random/10");
    const dog = await res.json();

    const result = dog.message.map(url => "Dog: " + url);
    console.log(result);
  } catch (err) {
    console.error("Error:", err);
  }
}
getDogs();


//3.Agify
async function getAge() {
  try {
    const r = await fetch("https://api.agify.io/?name=arjun");
    const obj = await r.json();

    const result = {
      name: obj.name,
      age: obj.age,
      category: obj.age >= 18 ? "Adult" : "Young"
    };

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getAge();


//4.Genderize
async function getGender() {
  try {
    const res = await fetch("https://api.genderize.io/?name=riya");
    const obj = await res.json();

    const result = {
      name: obj.name,
      gender: obj.gender,
      IsItAShe: obj.gender === "female"
    };

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getGender();


//5.Nationalize
async function getCountry() {
  try {
    const res = await fetch("https://api.nationalize.io/?name=rahul");
    const obj = await res.json();

    const result = obj.country
      .filter(c => c.probability > 0.1)
      .map(c => c.country_id);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getCountry();


//6.Joke API
async function getJokes() {
  try {
    const r = await fetch("https://official-joke-api.appspot.com/jokes/ten");
    const arr = await r.json();

    const result = arr.filter(j => j.type === "programming");
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getJokes();


//7.Numbers
async function getNumberFact() {
  try {
    const r = await fetch("http://numbersapi.com/1/30/date?json");
    const obj = await r.json();

    const result = {
      fact: obj.text,
      length: obj.text.length
    };

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getNumberFact();


//8.Random Users
async function getUsers() {
  try {
    const r = await fetch("https://randomuser.me/api/?results=5");
    const obj = await r.json();

    const result = obj.results.map(u => `${u.name.first} ${u.name.last}`);
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getUsers();


//9.Exchange Rate
async function getRates() {
  try {
    const r = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
    const obj = await r.json();

    const result = {
      INR: obj.rates.INR,
      EUR: obj.rates.EUR,
      isINRHigh: obj.rates.INR > 80 ? "Yes" : "No"
    };

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getRates();


//10.Unversities
async function getUniversities() {
  try {
    const r = await fetch("http://universities.hipolabs.com/search?country=India");
    const arr = await r.json();

    const result = arr
      .filter(u => u.name.includes("Engineering"))
      .map(u => u.name);

    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
getUniversities();
