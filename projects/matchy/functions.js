/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: Array of Objects, and a String name of an animal
//O: Object, if the string name is inside the object from the Array
function search(array, string){
    //iterate over the Array using a for loop
    for(var i = 0; i < array.length; i++){
        //if statement, check if the given string/name equals to the name inside the animal object
        if(string === array[i].name){
            return array[i]; //return the object
        }
    }
    return null; //otherwise, return null
}


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: Array of objects, a string name of animal, object for replacement
function replace(array, string, object ){
    //iterate using the for loop over the Array
    //check to see if the object inside the array has the given string name inside
    //Use the splice method on the array to remove the current object using the index, and replace it with the given object
    for(var i = 0; i < array.length; i++){
        if(string === array[i].name){
            array.splice(i, 1, object);
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(array, string){
//iterate using the for loop over the Array
    //check to see if the object inside the array has the given string name inside
    //Use the splice method on the array to remove the current object using the index.
    for(var i = 0; i < array.length; i++){
        if(string === array[i].name){
            array.splice(i, 1);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//I: an Array o objects, and a Object
//O: adds a new object to the Array
function add(array, object){
    //iterate over the Array using the for loop
    //if statement, check if the object's name length inside the array is greater than 0
    //also check if the object species length inside the array is greater than 0
    
        if(object.name.length > 0 && object.species.length > 0){
            for(var i = 0; i < array.length; i++){
               if(array[i].name === object.name){
                  return array[i];
               } 
            }
        }
        
    array.push(object);
    
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
