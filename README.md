## Exercise One
>Leet: L37'5 h4v3 50m3 fun  
Replace letters in a string with the mapping below  
[a,A] -> 4 [e,E] -> 3 [i,I] -> 1 [o,O] -> 0 [s,S] -> 5 [t,T] -> 7 [b,D] -> 5  
Note: [o,O] is not an owl face, it's the letter "o" and it should be replaced a zero.  
Objective: to convert a String into Leet

```
const arrayCharMap = {
  a: "4",
  A: "4",
  e: "3",
  E: "3",
  i: "1",
  I: "1",
  o: "0",
  O: "0",
  s: "5",
  S: "5",
  t: "7",
  T: "7",
  d: "5",
  D: "5"
}
let input = "Let's have some fun";
let nameArrVal = input.split("");
let output = "";
for (let i = 0; i < nameArrVal.length; i++) {
  const element = nameArrVal[i];
  output = this.arrayCharMap[element] ? output + this.arrayCharMap[element] : output + element;
}
console.log(output) //L37'5 h4v3 50m3 fun
```

## Exercise Two
>String: Manipulate strings with repeating characters aaabbbbccccc > a3b4c5  
Objective: Take each repeated letter in a string, and re-arrange the string so each letter in the  
string is shown once along with the number of times it is repeated. Do this serialized for each  
instance of any letter, and not for the total number of times that letter is shown in the string.  

```
let input = "aaabbbbccccc";
let charCount = 0;
let currentCharacter = input[0];
let output = "";

for (let i = 0; i < input.length; i++) {
  if (currentCharacter === input[i]) {
      charCount++;
      continue;
  }
  output += currentCharacter + charCount;
  currentCharacter = input[i];
  charCount = 1;
}
if (charCount) {
  output += currentCharacter + charCount;
}
console.log(output) //a3b4c5
```

## Sample User interface 
> Run the program using below steps to look at the user interface  
Note: The interface is created using ReactJS
- npm install
- npm start

![Screenshot](https://github.com/psaelango/Technical.Test/blob/master/public/screenshot.JPG)

