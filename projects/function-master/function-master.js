//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: object
//O: return an Array with the given object values.
function objectValues(object) {
    let newArr = [];
    //use a for in loop to iterate over the object
for(let key in object){
    newArr.push(object[key]); //use push method to add the values from the object
}
return newArr; //return updated array
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: Object
//O: A string of keys, with the keys from the object as one string
//C: strings should have spaces between the words
function keysToString(object) {
//create an empty array
let newArr = [];
//for in loop to iterate over the given object
for(let key in object){
    //push method to add keys to the array
    newArr.push(key);
}
return newArr.join(" "); //use join method on the updated array to concatenate the keys into one string with spaces

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: object
//O: a string, with the values as one big string
//C: strings should each be separated with a space
//E: If the value is not a string do not add it
function valuesToString(object) {
    let newArr = [];
    //use a for in loop to iterate over the object
for(let key in object){
    //check if the key value is a string
    if(typeof object[key] === "string"){
    newArr.push(object[key]); //use push method to add the values from the object
    }
}
return newArr.join(" "); //return the string
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: collection, Array or object
//O: a string, saying array or object
function arrayOrObject(collection) {
    //using an if statement, use Array.isArray to check if the given value is an Array
    //use the typeof operator to check if the given value is an object
    if(Array.isArray(collection)){
        return "array";
    } else if(typeof collection === "object"){
        return "object"
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: string
//O: a string with the first letter capitalize
function capitalizeWord(string) {
//use bracket notation and use toUpperCase method to make the first letter capitalize
//use the +, add the rest of the letters from the string by using slice method on the string by passing in the 1 index

    return string[0].toUpperCase() + string.slice(1);
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: string of words
//O: a string with each word capitalize
function capitalizeAllWords(string) {
    //create an Array by using the split method on the string 
    let newArr = string.split(" ");
    //create another array
    let updateArr = [];
    //loop over the new array
    for(let i = 0; i < newArr.length; i++){
       updateArr.push(newArr[i][0].toUpperCase() + newArr[i].slice(1));
    }
return updateArr.join(" "); //use the join method to concatenate the values into one string
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: object
//O: a string
function welcomeMessage(object) {
    //concatenate the name property from the given string to Welcome, a space and !
return "Welcome" + " " + capitalizeWord(object.name) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: Object with a name and species key
//O: a string, "name is a species"
//C: first letter of values capitalize , must have spaces
function profileInfo(object) {
    //call the capitalizeWord function on the key values so the first letter is capitalize
    //use the + to concatenate
    //make sure there are spaces
    return capitalizeWord(object.name) + " is a " + capitalizeWord(object.species);

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
if(arrayOrObject(object.noises) !== "array"){
    return "there are no noises"
} else if(object.noises.length === 0){
    return "there are no noises";
    
} 
return object.noises.join(" ");

}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: string with words, and a word to search for in the string of words
//O: a boolean, if the given word is inside the string return true
function hasWord(string, word) {
//using includes method and use an if statement
if(string.includes(word)){
    return true;
}
return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: a string name, and object with a friends property that is an Array
//O: an updated object with the given name now inside the friends array
function addFriend (name, object) {
    //check to see if the friends property is an Array
    //use the push method to add name to the array
    //return the object
if(Array.isArray(object.friends)){
    object.friends.push(name);
} else {
    return object;
}
return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: a string name, and a object with a friends property
//O: a boolean, true if the name is inside the friends array
//E: what if the object does not have a friends property? should return false
function isFriend(name, object) {
//use if statement
//use hasOwnProperty if friends is not apart of the object
//use includes to see if the name is inside the array
//otherwise return false
if(!object.hasOwnProperty("friends")){
    return false;
} else if(object.friends.includes(name)){
    return true
}
return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: name string, an array of objects with a name and friends property
//O: an Array of names that are not friends with the given name
//iterate over the given array
//using an if statement check to see if the given name is not apart of the friends array
//also if the given name is not same as the current object name
function nonFriends(name, array) {
//create an empty array to hold the names that are not friends
const nonFriend = [];
for (let i = 0; i < array.length; i++){
    if(!array[i].friends.includes(name) && name !== array[i].name){
        nonFriend.push(array[i].name);
    }
}
return nonFriend;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
object[key] = value;
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
for(var i = 0; i < array.length; i++){
    delete object[array[i]];
}
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    let removeArr = [];
    for(let i = 0; i < array.length; i++){
        if(!removeArr.includes(array[i])){
            removeArr.push(array[i])
        }
    }
return removeArr;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}