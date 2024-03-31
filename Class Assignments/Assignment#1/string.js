//length property
let myName = "Muhammad Hammad";
console.log(myName.length); 

//Extracting Characters from String
//4 methods
console.log(myName.at(5));
console.log(myName.charAt(5));
console.log(myName[5]);
console.log(myName.charAt(myName.length - 5));
console.log(myName.at(-5));

myName[0] = "a";

console.log(myName);

//Extracting String Parts
//3 methods
console.log(myName.slice(-5));
console.log(myName.substring(0, 5));
console.log(myName.substr(-5));

//Converting to Upper and Lower Case
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());

//Joining two or more strings together
//2 methods
console.log("Muhammad".concat(" ", myName));
console.log("Muhammad" + " " + myName);
//removes whitespaces from  a string:
myString = "   SomeString   ";
console.log(myString);
console.log(myString.trim());
console.log(myString.trimStart());
console.log(myString.trimEnd());

//String Padding
//2 methods
let myNumberInString = "5";
console.log(myNumberInString.padStart(4, "0"));
console.log(myNumberInString.padEnd(4, "0"));
let myNumber = 5;
console.log(myNumber.toString().padEnd(2, "$"));

//String Repeat
console.log(myNumberInString.repeat(5));

//Replacing String Content
console.log(myName.replace("Muhammad", "Hammad"));

//Regular Expression with the flag /g(global match)
let anotherString = "Welcome to Comsats University";
console.log(anotherString.replace(/Sir/g, "Mr."));
//or
console.log(anotherString.replaceAll("Sir", "Mr."));
console.log(anotherString.replaceAll(/Sir/g, "Mr."));
//Converting a String to an Array
let searchString = "A clever fox jumps over lazy cat";
let wordsFromSearchString = searchString.split(" "); //Split on spaces
console.log(wordsFromSearchString);

//indexOf()
console.log(searchString.indexOf("clever"));
console.log(searchString.indexOf("b", 3));