/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//create an object called animal
//use dot and bracket notation to add key values to the object
var animal = {};
animal.species = "dogs";
animal["name"] = "Alex";
animal.noises = [];
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create an array called noises
//use the bracket notation to add a value to the array
//use push and unshift method to add values at the end and beginning of the array
//use the length property in the bracket notation to add at the last value
var noises = [];
noises[0] = "Woof";
noises.push("Arf");
noises.unshift("bark");
noises[noises.length] = "Grrr!"
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal["noises"] = noises;
animal.noises.push("howl");
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//create a an empty array
//use the push method to add an object to the array
var animals = [];
animals.push(animal);
console.log(animals);
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
console.log(animals)
//create two new objects with the species name and noises key values
//and add it to the animals array
var cat = { species: 'cat', name: "Bob", noises: ["purr", "hisss"] };
var fish = { species: "fish", name: "Steve", noises: ["burp", "slurp"] }
animals.push(cat, fish);
console.log(animals);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Arrays are good to display list type data
//create an array
//create a function that takes a random index from the animals array
var friends = [];
function getRandom(){
    //use Math.floor to return an integer
    return Math.floor(Math.random() * animals.length);
}
//add the random object name key value to the friends array
friends.push(animals[getRandom()].name);
console.log(friends);
animals[0]["friends"] = friends;
console.log(animals[0]);



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}