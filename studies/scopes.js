/**
 * 
 * SCOPES: In JavaScript, scope is where values are avaliable and where they could be accessed. 
 *  
 * There three types of scopes: have global scope, local scope, and block scope.
 * 
 * Global scope: when a value is accessed anywhere in the code or function.
 * 
 * Local scope: when a value is avaliable within a function.
 * 
 * Block scope: where a value is accessed in a block of code.
 * 
 * Variables decalred with let are blocked scope.
 * 
 * Variables decalred with const are local or global scoped.
 * 
 */ 
 
 
 //1. Global scope: //
 
 
 var chrisJericho = "Raw Is Jericho"; //this variable is global scoped
 
 function tripleH(string){
     return chrisJericho = string; //this function have accessed to the variable that is global scoped
 }
 
 //2. Local scope //
 
 function chrisBeniot(string){
     var word = "For Real";
     return word + string;
 }
 // console.log(word); // this will throw an error, the variable word is local scope. Cannot have access to the variable when outside the function
 
 //3. Block Scope //
 
 function ratedRKO(number){
     for(let i = 10; i <= number; i++){ //The variable i is only available in the block of code of the for loop
         if(!isNaN(number)){
             console.log(i); //i is available here because its inside the block scope.
         }
     }
     return "not a number";
 }