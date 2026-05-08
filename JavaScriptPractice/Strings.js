//1.Reverse
let str = "Hello, World!";
let reversed = "";
for (let i=str.length - 1; i>=0 ; i--){
    reversed += str[i];
}
console.log(reversed);

//2.count vowels
let str1 = "Hello, World!";
let count = 0;
for (let i=0 ;i<str1.length ; i++){
    if("aeiouAEIOU".includes(str1[i])){
        count++;
    }
}
console.log("count of vowels:",count);

//3.Palindrome
let str2 = "mom";
let reversed1 = "";
for (let i=str2.length-1; i>=0; i--){
    reversed1 += str2[i];
}
if (str2 === reversed1){
    console.log(`${str2} is a palindrome`);
}

//3.Captilize first letter
let str3 = "hello my name is john doe";
let words = str3.split(" ");
for (let i=0; i<words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}
console.log(words.join(" "));

//4.Find the longest word
let str4 = "MY name is John Doe, Hello";
let words1 = str4.split(" ");
let longest = "";
for (let i=0; i<words1.length; i++){
    if (words1[i].length > longest.length){
        longest = words1[i];
    }
}
console.log("Longest word:", longest);
