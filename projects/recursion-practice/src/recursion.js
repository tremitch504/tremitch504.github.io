// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  //base case
  if(n < 0){
    return null;
  } else if(n === 0){
    return 1;
  } 
  
  return n * factorial(n - 1);
  
  //
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
    //If there is not a length of the array
  //lets return 0
  if(!array.length){
    return 0;
  } else {  //If the array does have a lenght
            //lets return the staring point of the array
            //and concat it with the sum function
//it will take the array using the slice method to take one element each time it runs until there is nothing left in the array.
//and so the slice can take the element and put inside a new array 
    return array[0] + sum(array.slice(1));
  }
    
  
  

};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
    
      

};

// 4. Check if a number is even.
var isEven = function(n) {
    //Base case: stop recursing when number is equal to 1, return false if so because 1 is an odd number
      //stop recursing when number is strit equal to 0, return true if so because 0 is an even number
      //stop recursing a negative number
      if(n === 1){
        return false;
      } else if( n === 0){
        return true;
      } else if(n < 0){
        return isEven(-n);
      } else{
        // Recursive case: we want to return the isEven function that takes number - 2 
        return isEven(n-2);
      }
      

};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
    //Base Case: if number is strict equal to 0, lets return 0;
  if(n === 0){
    return 0;
  } else if(n > 0) {//Recursive case: if number is less than 0, 
  return n - 1 + sumBelow(n - 1); //return number - 1 and add the sumBelow function while taking number - 1 as its arguments
  } else{
    return n + 1 + sumBelow(n+1);  //if not, return number adding 1 to it and add the sumBelow function while taking n + 1 as its arguments
  }
  

};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  //Base Case: stop when x is strictly equals to the expressing of y -1, return an empty array
//or when y is strictly equals to the expression of x - 1 
if(x === y - 1 || y === x - 1|| x === y){
  return []; 
} else if(x < y){  //Recursive case: if x is less than y, return x + 1 and using the concat method concat it with the range function
  return [x + 1].concat(range(x + 1,y)); //range should take x+1 and y as its parameters
} else{
  return [x - 1].concat(range(x - 1,y)) //if x is greater then return x-1 and concat it with the function range
}                                   //should take x-1 and y as its arguments



};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    if(exp === 0){  //if the exponent isor exp is strictly equal to 0
    return 1;  //return 1
  }
  //Uisng a ternary operator
  //saying if exponent is less than 0 return the base times the function exponent that takes in a base and exp -1 as its arguments
  
  return exp > 0 ? base * exponent(base, exp - 1) : 1 / (base * exponent(base, -1 * exp - 1));
  

};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
     if(n === 1){ //if n is equal to 1, or a power of 2
    return true //return true
  } else if(n / 2 < 1) { //if n divide by 2 is less than 1
    return false; //lets return false
  } else {
    return powerOfTwo(n/2); //if it has no remainder. call the powerOfTwo function with n divided by two
  }

  

};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
    if(string.length === 1){ //if the length of the string equal to 1
    return string //return the string
  } else{ //if it is empty, return the last character concated with a call so we can reverse the string 
    return string[string.length - 1].concat(reverse(string.slice(string[0], string.length - 1 )))
  }

};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
    var str = string.replace(/ /g, "").toLowerCase(); //replace anything that is not a string, and have it lowercase
  if(str === 0 || str.length === 1){ //if str is equal to 0 and the length of it is 1
    return true; //return true 
  } else if(str[0] === str[str.length - 1]){ //if the first letter is equal to the last letter
    return palindrome(str.slice(1, str.length - 1)); // return the call, with first and last letter removed from the string
  } else{
    return false; //return false 
  }

};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
    if(x === 0 || y === 0) { 
    return 0;
  }
  if( x > y) {
   return y > 0 ? x + multiply(x, y - 1) : - x + multiply(x, y + 1);
  } else {
     return x > 0 ? y + multiply(x - 1, y) : - y + multiply(x + 1, y);
  }

};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
    if(x === 0 || y === 0) { 
    return 0;
  }
  if( x > y) {
   return y > 0 ? x + multiply(x, y - 1) : - x + multiply(x, y + 1);
  } else {
     return x > 0 ? y + multiply(x - 1, y) : - y + multiply(x + 1, y);
  }
  

};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
    if(str1 === "" && str2 === "" ){ //if both strings are empty
    return true; //return true
  } else if(str1.charAt(0) !== str2.charAt(0)){
    return false; //if the first character does not match the other first letter of the second string
  } //return false 
  return compareStr(str1.substr(1), str2.substr(1)); //return the call with the string not having the letter

};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
    if(str.length === 0){ //is the lemgth of the case equal to zero
    return []; //return empty array
  } //return a letter of string at each index use concat to  add letter to the array
  return str[0].split("").concat(createArray(str.slice(1))); 
};


// 17. Reverse the order of an array
var reverseArr = function (array) {
  if(array.length === 0){
    return [];
  }
  return [array[array.length - 1]].concat(reverseArr(array.slice(0, array.length -1)));

};

// 17. Reverse the order of an array
var reverseArr = function (array) {
    if(array.length === 0){
    return [];
  }
  return [array[array.length - 1]].concat(reverseArr(array.slice(0, array.length -1)));

   
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
    if(length == 0){ //if this length equals to 0
    return []; //return an empty array
  }
  return [value].concat(buildList(value, length - 1)); //else return an array with the call to decrement the length

};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
    if(array.length === 0){ //if the array length is 0
    return 0; //return 0
  } else if(array[0] === value){ //if the fist index equals to the value
    return 1 + countOccurrence(array.slice(1), value) //return the call of countOccurrence to remove the current element
  } else {
    return countOccurrence(array.slice(1), value); 
  }

};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
    if(array.length === 0){ //if the array is empty 
    return [];//return an empty array
  } else {//just return the call of the callback function for the current element of the array and concat the call ofrMap without the first element 
    return [callback(array[0])].concat(rMap(array.slice(1), callback));
  }

};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
    if(n === 0){ //if n equals 0 return 0
    return 0;
  } else if(n === 1){//if n is equal to 1
    return 1; //return 1
  } else if(n < 0){ //if n is less than 0
    return null; //return 0
  } else { // return the call of nthFibo that takes n - 1 and add it to call of nthFibo takes n - 2
    return nthFibo(n - 1) + nthFibo(n - 2);
  }


};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
    if(input.length === 0){
    return [];
  } return [input[0].toUpperCase()].concat(capitalizeWords(input.slice(1)));

};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
    if(!array.length){ //if the array is empty
    return []; //return an empty array
  } //return the first letter capitalized for each word 
  //call the capitalizeFirst so we can remove the first element
  return [array[0][0].toUpperCase() + array[0].slice(1)].concat(capitalizeFirst(array.slice(1)));

};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
    if(typeof obj === "undefined"){ //if obj is undefined 
    obj = {}; //make obj an object
  }
  if(str.length === 0){ //if there is no length of str
    return obj; //return obj
  }
  obj[str[0]] = (obj[str[0]] || 0) + 1; //see if the first letter of str is a key in the object
  return letterTally(str.slice(1), obj); //use the call letterTally with the first letter  taking and use obj as its argument

};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
    if(!list.length){ //if the list is empty
    return []; //return an empty array
  }
  if(list[0] === list[1]){ //if the first element is equal to the second 
    return compress(list.slice(1)); //call the compress function 
  }
  return [list[0]].concat(compress(list.slice(1)));

};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
    if(!array.length){ //if the array is empty
    return []; //return an empty array
  }
  if(array[0] === 0 && array[1] === 0){ //if both the first and second element equals zero
    return minimizeZeroes(array.slice(1)); //use slice to slice one off and call the function
  } else{
    return [array[0]].concat(minimizeZeroes(array.slice(1))); //if not lets add the letter to the function call
  }

};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
    if(!array.length){ //if the array is empty
    return []; //return an empty array
  }
  let last = array[array.length - 1]; 
  //see if the curren number is positive or negative 
  if(last >= 0){
   last = array.length % 2 === 0 ? last * -1 : last;
  } else {
    last = array.length % 2 === 0 ? last : last * -1;
  }
  //take off the last inex, call the function alternateSign 
  return alternateSign(array.slice(0, array.length - 1)).concat([last]);

};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
    //make sure the number keys equal to a string of whats the name of the number in the object
  var numbers = {
    1: "one", 2: "two", 3: 'three', 4:"four", 5: "five", 6: "six", 7: "seven", 8: "eight",
    9: 'nine', 0: "zero"
  };
  var result = ""; //create an empty string
  if(str.length === 0){ //if there is no length to str return the empty string
    return result;
  } else{
    var currentChar = str.charAt(0); //currentChar is the first letter in the str
    if(numbers[currentChar]){
      result = result + numbers[currentChar]; //add the empty string to the current character in the numbers array
    } else {
      result = result + currentChar; //add the result to the strings first letter 
    }
    return result + numToText(str.slice(1)); 
  }

};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
