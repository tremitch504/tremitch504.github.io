/**
 * 
 * OPERATORS:  In javaScript, operators act on or data.
 * They can compare, use it in expressions, assign them, or include them in arthimetic operators.
 * 
 * Operators are classified or categorize by what they do and how many operands they require.
 * 
 * 
 */
 
 //1. Assignment Operators: =, +=, -=, *=, /=, %= //
 //These operators are binary operators which takes a value and save it to a variable.
 
 //example// 
 
 var powerRanger = "Red Ranger"; //= assigns a string to the variable
 //additional assignment operator will add 5 to the variable total and also assign
 var total = 8;
 total += 74; 
 console.log(total);
 
 //2. Arithmetic Operators: +, -, /, * //
 //These operators take numeric values and return a numeric value as the result of an expression.
 //example//
 
 console.log(15 + 99); //prints out 110
 console.log(34 *5); //prints 170
 
 //3. Comparison Operators: Compare two operands and a boolean will return //
 //Example: <, >, <=, >=, ===, !==, / //
 
 console.log(77 > 88); // this will print false, 77 is not greater than 88
 console.log(353 === 353); //will print true because both operands are strictly equals to each other
 console.log(29 <= 77) //less than or equal to, will print true because 29 is less than 77
 
 //4. Logical Operators: Used with booleans, can be used with comparisons which evaluate to boolean.
 //Example: &&, ||, ! //
 
 console.log(230 > 547 && 65 < 33); //prints false
 console.log("ricky" === "ricky" || 44 === 66); //prints true

//5. Unary operators: operators with one operand either before or after the operator//
//example: !, typeof, - //
//typeof returns the data type in a string
console.log(typeof 9); // prints "number"
console.log(typeof 'BBD') //prints a string
console.log(typeof (44 < 22)); //prints "boolean"

//6. Ternary Operator: operator with three operands and is a conditional operator. //
//Example: (a?b:c) //

var bellBivDevoe = "I thought it was me?";
console.log(bellBivDevoe ? "I thought it was me?" : "poison"); //prints I thought it was me?
 
 