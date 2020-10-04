/**
 * 
 * STRING MANIPULATION: iN JavaScript we can manipulate strings.
 * Strings are immutable, they can't be changed but there are methods we can use to alter the string.
 * 
 * 
 */
 
 //1. With Operators //
 
 // We can concatenate strings by using the(+)
 
 var myString = "No";
 var myString2 = "Smoke!";
 console.log(myString + " " + myString2); //should print No Smoke! in one string
 //or we can use += to concatenate
 
 var spongebob = "I'M ";
 spongebob += "READY!";
 console.log(spongebob); //prints out "I'M READY!"
 
 //2. String Methods: slice(): slice will return a string starting at a given index and will continue to the end
 //so it takes two parameters or one, start and end index
 
 let beGreat = "Frosty";
 console.log(beGreat.slice(3)); // prints sty
 
 // split(): this method will return an array with the string cut up. splitting the words from the string into an Array
 
 let mySplit = "hey boo boo can I get another picnic basket?";
 console.log(mySplit.split( " ")); // prints [hey, boo, boo, can, I, get, another, picnic, basket?]
 
 //we can also use join on the array of string to turn the values into one string
 let newArr = mySplit.split(" ");
 console.log(newArr.join(" ")); //prints hey boo boo can I get another picnic basket?
 
 // toLowerCase() and toUpperCase(): these methods can make a string lowercase or uppercase//
 let theMiz = "Im Awesome"
 console.log(theMiz.toLowerCase()); // prints im awesome
 console.log(theMiz.toUpperCase()); // prints IM AWESOME
 
 //charAt(): will return the character at the specified index
 let whoKnew = "Nipsey Hussle";
 console.log(whoKnew.charAt(7)) //H
 
 // replace(): the replace method replaces an element with another element thats given
 
 let greeting = "How are you doing?";
 console.log(greeting.replace("doing?", "feeling?")); // prints How are you feeling?
 
 //just like the operators for concatenation, we can concate with the concat method
 
 let childsPlay = "Hi, I'm Chucky, ";
console.log(childsPlay.concat("Wanna Play?"));

 
 
 
 