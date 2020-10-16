/**
 * 
 * 
 * LOOPS: We can execute and run a block of code as many times we want by iterating over 
 * some type of collection of data.
 * 
 * A loop has starting condition and stopping condition which tells how long the loop should iterate and how much it increments.
 * 
 * 
 */
 
 //1. While loop: the while loop takes a condition and a code block. When the condition is true the code of block will execute.
 // The loop must have an end  while in the loop, because if it don't it will keep running and program will break.
 
 //Example //
 //This while loop will start at 0, increment all the way to 21 since its less than 22
 //prints numbers 0 through 21
 var count = 0;
 while(count < 22){
     console.log(count);
     count++
 }

 
 //2. For loop: In a for loop, an expression is ran once before a loop starts. A variable is declared to have a starting point.
 //Also has a testing condition that will returns a boolean. This also checks when to stop iterating.
 //In a for loop we can Increment or decrement to have some type of iteration going on inside our loop.
 //This loop is useful to iterate over Arrays. There have statements that goes in parenthses.
 //When the test condition returns false, the loop will end.
 //I can print out the numbers 1 through 10 with a for loop.
 for(let i = 1; i <= 10; i++){
  console.log(i); // prints numbers from 1 to 10
 }
 //Example //
 //this for loop will start at the 0 index and increment having access to all the values in the array
 //stopping at the length of the array
 //will print  21 savage metro boomin Bryson Tiller YG giveon
 
 let myRappers = ["21 savage", "metro boomin", "Bryson Tiller", "YG", "giveon"];
 for(let i = 0; i < myRappers.length; i++){
     console.log(myRappers[i]);
 }
 
 //3. For in loop: We can kickoff a for in loop with a variable like our for loop, and an object or name of object so the for in loop can iterate over the object.
 //the variable reperesents each property or key "IN" the object that the for in loop is iterating over
 //example: for(let key in object) key is the varaible.
 
 //This loop iterates over an object to get access to each key value pair
 //This loop will take each key and concate it with the ":" and the value of that key
 let spotify = {artist: "21 Savage", song: "Bank Account", year: "2017"};
 
 for(let key in spotify){
     console.log( key + " :" + spotify[key]);
 }
 
 
 