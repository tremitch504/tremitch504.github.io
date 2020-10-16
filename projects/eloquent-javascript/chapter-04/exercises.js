////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start,end, increment = start < end ? 1 : -1 ) {
let array = []; //create anempty array
if(increment >= 0){ //check if the increment is greater or equal to 0
  for(var i = start; i <= end; i+= increment){
    array.push(i); //push the start inside the empty array
  }
    
  } else if(start === end){ //see if start is strictly equal to end
    
      return []; //if so return an empty array
    } else{
      for(let i = start; i >= end; i += increment){ //else use for loop to increment
        array.push(i); //push start inside the array.
      }
    }
  




return array; //return our array

}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  var total = 0; //set our total to 0
  for(var i = 0; i < array.length; i++){ //use for loop to go through array
    total += array[i]; //add the values of the array to total
  }
return total; //return that total

}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  var newArr = []; //create an empty array
for(var i = 0; i < array.length; i++){ //loop over the array with the for loop
  newArr.unshift(array[i]); //use the unshft method to add the array values inside the empty array
}
return newArr; //return that array


}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
   for(var i = 0; i < Math.floor(array.length / 2); i++){  //use the for loop to loop over the array, divide the length of the array by 2
   var otherArr = array[i]; //set the variable as the values of the array
   array[i] = array[array.length - 1 - i]; //minus the value from the last element of the array 
   array[array.length - 1 - i] = otherArr; 
 }
 return array; //return the array


}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
var list = null; //set list to null or empty object
for(var i = array.length - 1; i >= 0; i--){ //loop through the array using for loop
  list = {value: array[i], rest: list}; //assign an object to list, the key value equals the value of array, rest set to the object
}
  
  return list; //return the object



}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  var array = []; //create an empty array
for(var node = list; node; node = node.rest ){ //loop through the list 
  array.push(node.value); //push the vlaues inside the array 
} 
return array; //return that array


}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
 //this function takes a value and a list as its arguments 
  return {value: value, rest: list}; //return an object  with values of the keys with the parameters 

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, number) {
  if(!list){ //if its not a list 
    return undefined; //lets return undefined
  } else if(number === 0){ //if number equals to 0
    return list.value; //return the values of list
  } else{
    return nth(list.rest, number - 1); //else, return a recursion taking the value of the rest and mumber minus 1 as its arguments
  }
  

}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(object1, object2) {
  if(object1 === object2){ //if both objects equal to each other 
    return true; //lets return true 
  } else if(object1 === null || typeof object1 !== "object" || object2 === null || typeof object2 !== "object"){
    return false; //if these arguments are not objects return false;
  } 
  let key1 = Object.keys(object1), key2 = Object.keys(object2); //use Object.keys to change the objects to Array's
  if(key1.length !== key2.length){ //if the length of the arrays are not equal to each other 
    return false; //return false
  }
  for(let key of key1){ //loop through key1 use for of 
    if(!key2.includes(key) || !deepEqual(object1[key],object2[key])){ //if the key does not include in the key2 array 
      return false; //return false 
    }
  }
  return true; //return true.

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
