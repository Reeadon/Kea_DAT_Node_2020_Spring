// i flag ignores case

const myRegEx = /hello/i;
const result = myRegEx.test("Hello World");

// console.log(result);

// Pipe = or

const petString = "Anders has a turtle"
const petRegEx = /dog|cat|bird|fish|turtle/;

// console.log(petRegEx.test(petString));

// Match

const extractString = "Extract the word 'cow' from this string";
const cowRegex = /cow/;

// console.log(extractString.match(cowRegex));

// Matching multiple with the global flag

// console.log("Repeat, Repeat, repeat".match(/Repeat/ig));

// Exercise

const twinkleStar = "Twinkle, twinkle, little star";

// console.log(twinkleStar.match(/twinkle/ig));

// --------------------------------------------

// Wildcards

const humString = "That's humbug!";
const hugString = "I need a hug.";
const huRegex = /hu./;

// console.log(humString.match(huRegex));
// console.log(hugString.match(huRegex));

//Exercise: 

// console.log("He's a fun 'un".match(/.un/g));

// Wildcards II - one of the following letters

// console.log("I found big bugs in my bag".match(/b[aiu]g/g));

// Exercise: Find all the vowels in the string

// console.log("I found big bugs in my bag".match(/[aeiou]/g));


//  Negated characters sets 

// console.log("I found big bugs in my bag".match(/b[^ai]g/g));


// Match all within a range

// console.log("6k854sdfkhgf45ghj".match(/[0-9]/g));

// Exercise: Match the entire alphabet

// console.log("6k854sdfkhøsterægf45ghj".match(/[a-å]/ig));

// alphanumeric 

// console.log("6k854sdfkhøsterægf45ghj".match(/[0-9A-Z]/ig));


// Multiple Matches

console.log("go goo goooo goooooooo".match(/go*/ig));

