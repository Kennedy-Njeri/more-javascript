//let text = "Kennedy"
//
// let length = text.split('*').length
// let txt = text.split('*')
// console.log(length)
// console.log(txt)


// https://stackabuse.com/javascript-convert-number-to-string/
// https://www.tracedynamics.com/javascript-split-string-method/

// let count = '5e662c399cc76917aff7e688'
//
// const data = count.toString()
//
// console.log(data)
//

var fullData =  '{"fname":"Thomas","lname":"Cook","city":"Miami",\n' +
    '"state":"Florida", "Hobbies":"golf,trading,chess,fishing"}';

var data = JSON.parse(fullData);
console.log(data)
var getHobbies = data.Hobbies;
var getHobbiesArray = getHobbies.split(",");
console.log(getHobbiesArray);


var arrayString = "Regular:Expression";
var myArraySplits = arrayString.split(":");
console.log(myArraySplits);


const word = "float";
const reversedWord = word.split("").reverse().join("");

console.log(reversedWord)

const names = "Kratos- Atreus- Freya- Hela- Thor- Odin";
const namesArr = names.split("- "); // Notice that the separator is a dash and a space
const firstThreeNames = names.split("- ", 3);

console.log(namesArr) // [ "Kratos", "Atreus", "Freya", "Hela", "Thor", "Odin" ]
console.log(firstThreeNames); // [ "Kratos", "Atreus", "Freya" ]

const sentence = "Ladies and gentlemen we are floating in space.";
const words = sentence.split(" "); // Split the sentence on each space between words

console.log(words);