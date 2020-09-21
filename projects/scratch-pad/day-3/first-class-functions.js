// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //I: a string or number
    //O: a boolean. a function that returns a boolean
    //return an anonymous that takes a value as its argument
    return function(value){
        return value > base;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    // YOUR CODE BELOW HERE //
    //I: a string or number
    //O: a boolean. a function that returns a boolean
    //return an anonymous that takes a value as its argument
    return function(value){
        return value < base;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    //return an anonymous function takes a string
    //checks if the first letter of the given string strictly equals to the given startsWith
    //use the toLowerCase method just incase
    return function(string){
        return string[0].toLowerCase() === startsWith.toLowerCase();
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    //return an anonymous function takes a string
    //checks if the end letter of the given string strictly equals to the given endsWith
    //use the toLowerCase method just incase
    return function(string){
        return string[string.length - 1].toLowerCase() === endsWith.toLowerCase();
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //I: array of strings, a function called modify
    //O: A new Array with the modifed values 
    //create a new empty Array
    let newArr = [];
    //use the for loop to iterate over the strings Array
    for(let i = 0; i < strings.length; i++){
        //use the psuh method which will take the call of the modify function that passes the values from the strings Array and will be added to the empty array
        newArr.push(modify(strings[i]));
    }
    //return the new updated Array
     return newArr;
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    //I: an array full of strings, a function that test each string in the array
    //O: A boolean. if the test function comes back false 
    //iterate over the strings Array
    //use if condition to see if test function that takes each value from the array passes
    //otherwise return true
    for(let i = 0; i < strings.length; i++){
        if(!test(strings[i])){
            return false;
        }
        
    }
   return true;
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}