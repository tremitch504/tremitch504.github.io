// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    //I: value or some collection. Array
    //O: a boolean
//use Array.isArray to see if the given value is an Array
//if so return true
//if not return false
    if(Array.isArray(value)){
        return true;
    }
    
    return false;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    //I: a value, a collection. an Object
    //O: a boolean
    
    //use if condition to see if the value is an Array
    //we can use the call of our isArray function and if it comes back true return true
    //see if the value is null
    //check using instanceof
    //use typeof to see if value is an object
    //otherwise return false
    if(Array.isArray(value)){
        return false;
    } else if(value === null){
        return false;
    } else if(value instanceof Date){
        return false;
    } else if(typeof value === "object"){
        return true;
    }
     return false;
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    //use if condition to see if the value is an Array and return true
    //we can use the call of our isArray function and if it comes back true return true
    //see if the value is null
    //check using instanceof
    //use typeof to see if value is an object
    //otherwise return false
    if(Array.isArray(value)){
        return true;
    } else if(value === null){
        return false;
    } else if(value instanceof Date){
        return false;
    } else if(typeof value === "object"){
        return true;
    }
     return false;
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    //I: a value
    //O: a string
    
    //use if statement
    //check if the given value is an Array, if so return a string of the datatype
     //check using instanceof, return date
     //check if value is undefined
     //otherwise use typeof to return the string of the datatype of the value
    if(Array.isArray(value)){
        return "array"
    } else if(value === null){
        return "null"
    } else if(value instanceof Date){
        return "date"
    } else if(value === undefined){
        return "undefined";
    } else {
        return typeof value;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
