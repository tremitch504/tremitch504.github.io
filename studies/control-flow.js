/**
 * 
 * 
 * CONTROL FLOW: With a set of conditional statemenets, a control flow statement can tell a
 * computer how to act.
 * 
 * Conditional statements evaluate to boolean values.
 * 
 */
 
 //1. If Statement: an if statement is the first condition of the chain
 //Example //
 
 let callOfDuty = "War Zone";
 
 if(callOfDuty === "War Zone"){
     console.log("He has a C4!"); //This conditional statement will return true and print "He has a C4!"
 }
 
 //What if the if statement returns false??
 
 //Else if statement: We can have multiple else if statements, the first one that returns true will execute.
 // so if the condition that is previous is false, we can use the else if statements.
 
 else if(callOfDuty === "Code War"){
     console.log("what is the code?") //this condition returns false
 }
 
 // What if all the conditions return false and doesn't pass?
 
 //Else: else statement executes as the final default statement, and can only be one else statement.
 //so if all the conditions before the else statement returns false, it will execute
 
 else {
     console.log("GET TO WAR!"); //this will not execute because the first if statement is true
 }
 
 //2. Switch Statement: switch statements are like if else if and else statement. 
 //It will evaluate an input expression, while matching the expression's value to case clause and execute the statement with the case. 
 //has a break statement that ends the case
 //like else, default will execute if the other cases returns false
 let holiday = "Halloween";
 //it will check to see what case matches the given value
 //will print This is Halloween since the first case is true.
 switch(holiday){
     case "Halloween":
         console.log("This is Halloween");
         break;
         case "Christmas":
             console.log("Santa is coming!");
             break;
             case "Thanksgiving":
                 console.log("turkey day!");
                 break;
                 default:
                 console.log("Happy New Year!");
 }