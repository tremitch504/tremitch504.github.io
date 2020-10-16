
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(number) {
    //iterate the "#" until it hits the number that is given as an argument.
  //use the .length property on variable i in loop for stopping condition
  //so that the loop can stop when its less than or equal to the given output or argument.
  for(var i = "#"; i.length <= number; i+="#"){
    console.log(i) 
  }


}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
//For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 
//(and not 3), print "Buzz" instead.//When you have that working, modify your program to print 
//"FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
function fizzBuzz() {
    for(var i = 1; i <= 15; i++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log("fizzbuzz");
    } else if(i % 3 == 0){
      console.log("fizz");
    } else if(i % 5 === 0){
      console.log("buzz")
    } else{
      console.log(i); 
    }
  }

}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(number) {
  //create an varibale assign it a string
  var stringSpace = "";
  //use for loop to iterate from 0 ti the given number
  for(var i = 0; i < number; i++){
    //loop again witha nested for loop so we can have spacing with the "#"
    for(var j = 0; j < number; j++){
      //use an if statement to see if the sum of i and j is an odd number, if so add a space.
      if((i+j) % 2 === 0){
        stringSpace += " ";
      } else {
        stringSpace += "#"  //if it is an even number lets add a "#"
      }
    } stringSpace += "\n";  //lets add a line break for each iteration in the parent loop
    
    
  }  console.log(stringSpace);

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
