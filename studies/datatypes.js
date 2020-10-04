/**
 * DATA TYPES:  There are two different datatypes in JavaScript.
 * They have simple or primitive datatypes and complex datatypes.
 * 
 * 1. Simple data types are immutable. They don't hold or collect other values, or alter the original value
 * 
 * 
 * 2. Simple datatypes are copied by value, so when assigning or passing from variable to the next.
 * 
 * 3. Complex datatypes are mutable, they can take in or collect other values and can be indefinite in size.
 * 
 * 4. Complex datatypes are copied by reference when assigning or passing from a variable to another.
 * 
 * 
 */
 

//1. Simple or Primitive data types: //
//Number: Numeric data //

var myNum = 109;

//String: character data //
let myStr = "Hey, Welcome to my Table Talk!";

//Boolean: true or false//

let myBool = true;

//NaN: not a number //
typeof NaN; // prints a string saying number
console.log(isNaN(109)); //will print false

//null: variable points to no object //
var isObject = null;

//undefined //
var myName; 
console.log(myName) // this prints undefined because the variable is not assigned to any value.

//2. Complex Data types: //

// Array: a collection which is ordered in position by 0 index. 
var myArray = ["Cam Newton", 1, true, {}];

//Object: Contains any number of key value pairs. //

var myObject = {toppings: "Meat Lovers", brand: "Dominos"};

//Function: a reusable code,contains statements. //
function myWorld(string, string2){
    let newArr = [];
    newArr.push(string, string2);
    return newArr;
}

//3. Infinity and -Infinity //

/**
 * 
 * Infinity is a numberic value that represents infinity
 * -Infinity is a negative value representing negative infinity 
 */
 
 //4. Simple datatypes do not hold values, Complex datatypes contain infinite amout of data.
 
 //Simple Data types copied by value //
 //this will print fred.
 //the value stored in gator is copied into croc
 //then changed the value of croc to gator which doesn't affect the value stored in gator
 var gator = "fred";
 var croc = gator;
 croc = "henry";
 console.log(gator);
 
 //Complex data types are copied by reference //
 //the value stored in croc is a reference to the value inside the gator
 //changing the value of croc will affect the gator because they both refence to the same object
 //this will print "reptiles" because both variables reference to the same object
 var gator = {liveStyle: "swim", home: "swamp"};
 var croc = gator;
 croc.species = "reptiles";
console.log(gator.species)