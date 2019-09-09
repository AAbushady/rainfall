/*
Write a program that stores the total rainfall for each of the 12 months of the year into an array. 
Use a random number for the rainfall’s value. 
The program should determine which of the months had the least amount of rain.

I would first create a variable for the rainfall array and for an array holding the months.
Next I would declare a sorting function to use when we want to sort the array for gettting the lowest
rainfall value. After that It would be time to make a loop to populate the rainfall array with month prototypes,
these would have a month value and a rainfall value. Now we make use of the sort function, and display the
lowest month of rainfall.
*/

// Pseudocode
/*
--Variables and Constants--
Declare Empty Array rainfall.
Declare Constant Array MONTHS.
Declare Variable for sort function sorting from lowest to highest.


--Calculations--
Loop once for each month in the month array:
    Assign a random number between 1 and 10 to rainfall.
    Push an object of month with a values of rainMonth and rainValue.
Assign rainfall to rainfall being sorted from lowest to highest.
            
--Display Values--
Display "Welcome to Rainfall"
Display "I have aggregated the last 12 months of rainfall,"
Display "and figured out which month had the least rain!"
Display `My results indicate that ${rainfall[0].rainMonth} had the most rain.`
Display `${rainfall[0].rainMonth} had a total of ${rainfall[0].rainValue}" of rain!`
Display "Thank you for using Rainfall!"
*/

// Constants and Variables
var rainfall = [];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
var sortFn = function(a, b) {
    return a.rainValue - b.rainValue;
}


// Calculations
for(var i = 0, cnt = MONTHS.length; i < cnt; i++) {
    let month = {
        rainMonth: MONTHS[i],
        rainValue: Math.ceil(Math.random() * 10)
    }
    rainfall.push(month);
}

rainfall = rainfall.sort(sortFn);

// Display Values
console.log("Welcome to Rainfall\n");
console.log("I have aggregated the last 12 months of rainfall,");
console.log("and figured out which month had the least rain! \n");
console.log(`My results indicate that ${rainfall[0].rainMonth} had the least rain.\n`);
console.log(`${rainfall[0].rainMonth} had a total of ${rainfall[0].rainValue}" of rain!\n`);
console.log("Thank you for using Rainfall!");