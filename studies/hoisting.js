/**
 * 
 * HOISTING: Hoisting is a way to organize variables, like bringing the declaration to the top of its scope.
 * 
 * Variables that are declared with the key words let and const are not hoisted. 
 * 
 * Any variable declared with the keyword var are hoisted. Function declarations are also hoisted.
 * 
 */
 
 
 //Hoisting Example: keyword var //
 
 console.log(tripleH); //this will print undefined.  tripleH is not initialized
 
 var tripleH = "Time to play the game"; // this variable is hoisted
 
 console.log(tripleH) //will print Time to play the game
 
 
 // Declaring a Function: a function declaration is hoisted to the top of the scop //
 
 evolution("mystery"); //this will print Is A mystery
 
 function evolution(string){
     return "Is A" + " " + string;
 }
 
 ricFlair("The Man!") //will get an error because the function name is declared with keyword var so it is hoisted
 
 var ricFlair = function(string){
     return "Wooo, " + string;
 }
 
 //Using keywords let and const: let and const variables are not hoisted // 
 
 console.log(randyOrton); // will get a reference error
 
 let randyOrton = "Burn in my light";
 
 console.log(batista); //will get a reference error
 
 const batista = "Whos the man?!";
 
 
 