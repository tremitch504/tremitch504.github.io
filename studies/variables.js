/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
var myVariable = true;
myVariable = "someString";


//4. var, let, and const. //
// Hoisting //
/* Hoisting is like an act of having the declarations of variables to the top, so variables declared with var and let can be used before  it is declared.
For example. */
tooSweet = "BALOR";
console.log(tooSweet); //will still print "BALOR" to the screen
var tooSweet 

/* var is one of the three statements we can use tp declare a variable.
Variables declared with var are reassignable. We can always change the values, even a different data type.

let is another statement we can use and it is also reassignable, meaning they are not hoisted to the code block.
It is a block scope variable.
Example. the variable tooCool can not be accessed or available outside the curly braces/scope.
We will get an reference error.
*/

{
    let tooCool = "slam master";
}

/* const is also a statement to use to declare a variable, but when using const we can not reassign the variable.
It is not hoisted to the top of their scope.
When using const, you cannot leave it unassigned and you will get an syntax error.
So it must be assigned to a value once it is declared.

Const variables is blocked scoped like let, not available outside the block of code because they are not hoisted.
*/

//console.log(runShrek);
const runShrek = " No Donkey!"; //will get an error that runsShrek is not defined

//runShrek = "There is A Dragon" // get type error, cannot reassign

