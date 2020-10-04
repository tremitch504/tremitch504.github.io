/**
 * 
 * 
 *FUNCTIONS: Functions allow us to use a block of code as many times as we want, so they are reuseable code.
 * 
 * 1. Can decalre a function using the keyword "function" and can give it a name.
 *    
 * 2. Functions take parameters to be placeholders for arguments that will be passed inside the function.
 * 
 * 3. We can call a function by its name and parentheses with an optional argument or value.
 * 
 * 
 * 4. Functions can allowed to have access to variables wich is defined in a parent or global scope.
 * 
 * 5. Closures: Closures are formed when a function reference variables in its parent scope.
 * So when calling a function, it has access to variables in the parent scope.
 * 
 * 6. Scopes: There are 2 types of scopes, theres Global scope and Local scope.
 * Anything outside of a function's code of block is global scope. Anything local or inside the function's block of code is local scope.
 * 
 * 
 */
 
 //1. Declaring a named function //
 //this function takes an array as its arguments and prints all of its values to the console
 function addamsFamily(array){
     for(let i = 0; i < array.length; i++){
         console.log(array[i]);
     }
 }
 // addamsFamily() //ling the function  
 //2. Function Expression //
 //We can assign functions to a variable.
 //this functions takes two strings as its arguments and concatenate into one string
 let hocusPocus = function(firstName, lastName){
     let fullName = firstName + " " + lastName;
     return fullName;
 }
 hocusPocus("Tre", "Mitchell") //prints Tre Mitchell
 
 
 //3. Modify variables in the global scope
 let goViral = "Big Bang!";
 function goPurple(){
  goViral = "St. Aug";
 }
 console.log(goViral); //this will print  Big Bang
 goPurple() //have access to goViral and reassign it with St. Aug
 console.log(goViral); //will print St. Aug