// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //use the for loop to iterate over the array and get access to each value inside
  //print the values
for(let i = 0; i < array.length; i++){
  console.log(array[i]);
}
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  //use the foor loop to iterate over the array
  //want to start at the end of the Array to print the values in reverse
  //so we have to decrement
  
  for(let i = array.length - 1; i >= 0; i--){
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //create a new empty array
  let newArr = [];
  
  //use the for in loop to iterate over the object
  //use push method to add the keys inside the new Array
  for(let key in object){
    newArr.push(key);
  }
  return newArr;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //loop over the object
  //only want to print the keys from the object to the console.
  for(let key in object){
    console.log(key);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //create a new empty array
  let newArr = [];
  //loop over the object to get access to all the key values
  //push the values inside the Array
  for(let key in object){
    newArr.push(object[key]);
  }
   return newArr;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  //loop over the object to iterate
  //print the values from the object to the console
  for(let key in object){
    console.log(object[key]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //create a new empty array
  let newArr = [];
  //loop over the object using a for in loop
  //push the values inside the empty array
  for(let key in object){
    newArr.push(object[key]);
  }
  //return the length of the array
  return newArr.length;
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  //create a new empety array
  let newArr = [];
  //loop over the object
  //push the object values inisde the new array
  for(let key in object){
    newArr.push(object[key]);
  }
  //use the reverse method on the new array with hte values now inside
  let revArr = newArr.reverse();
  //now loop over the array to iterate and print the values on to the console.
  for(let i = 0; i < revArr.length; i++){
  console.log(revArr[i]);
}
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
