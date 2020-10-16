// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-tremitch");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    //use filter function
    //return the customers with male
    //use length to return a number
    let male = _.filter(array, function(customer){
        return customer.gender === "male";
    }).length;
    return male;
};

var femaleCount = function(array){
    //use reduce function
    //increment for each customer that is female
    //return the final count
    let female = _.reduce(array, function(total, customers){
        if(customers.gender === 'female'){
            total++;
        }
        return total;
    }, 0)
    return female;
};

var oldestCustomer = function(array){
    //use reduce function to check if the current age is greater than the previous
    //return the final
   return  _.reduce(array, function(older, current){
        if(current.age > older.age){
            return current.name;
        } 
        return older;
    });
}

var youngestCustomer = function(array){
    //use a starting point of 100
    //see if the current customer age is less than the previous
    let oldest = 100;
    return _.reduce(array, function(prev, current){
        if(current.age < oldest){
            prev = current.name;
            oldest = current.age;
        }
        return prev;
    });
}

var averageBalance = function(array){
    //use the reduce function to iterate
    //return the total, using the parseFloat to convert out value
    //use slice method to slice of 1
    //split into , in between
    //use join to join strings
    //divide by the length of the array
    return _.reduce(array, function(total, current){
        return total += parseFloat(current.balance.slice(1).split(',').join(""));
    }, 0) / customers.length;
}

var firstLetterCount = function(array, char){
    //use reduce function to iterate
    //check if the current element name first letter is the same as given letter
    //if so increment
    return _.reduce(customers, function(prev, current){
        if(current.name[0].toLowerCase() === char.toLowerCase()){
            prev++;
        }
        return prev;
    }, 0);
};

var friendFirstLetterCount = function(array, customer, letter){
    //using a starting point
    //use each function to iterate over the array
    //if the element name is same as the givne customer
    //use the filter function to iterate over the friends array
    //see if the first letter of the element name is the same as the given letter
    //if so increment
    let count = 0;
    _.each(array, function(element, i, collection){
        if(element.name === customer){
            _.filter(element.friends, function(element, i, collection){
                if(element.name.charAt(0).toUpperCase() === letter.toUpperCase()){
                    count += 1;
                }
            })
        }
    });
    return count;
}

var friendsCount = function(array, name){
    let count = [];
    _.each(array, function(element, i, collection){
        if(element.name !== name){
            _.filter(element.friends, function(friend, i, collection){
                if(friend.name === name){
                    count.push(element.name)
                }
            })
        }
    });
    return count;
}

var topThreeTags = function(array){
    
    let tags = [];
    let count = {};
    
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array[i].tags.length; j++){
            let customer = array[i].tags[j];
            if(count[customer]){
                count[customer]++;
            }
            else{
                 count[customer] = 1;
            }
        }
    }
    let club = [];
    for(let key in count){
        club.push([key, count[key]]);
    }
    let sortTags = club.sort((a, b) => a[1] - b[1]);
    let myTopThree = sortTags.slice(sortTags.length - 3);
    tags.push(myTopThree[0][0], myTopThree[1][0], myTopThree[2][0]);
    return tags;
}

var genderCount = function(array){
    //use reduce function to iterate
    //if the final object as its property of the current gender value
    //increment its count as its value
    //otherwise assign 1 to its value
    //return the final object
    return _.reduce(array, function(final, current){
        let gender = current.gender;
        if(final.hasOwnProperty(gender)){
            final[gender]++;
        } else {
            final[gender] = 1;
        }
        return final;
    }, {});
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
