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
// This will sort the rainfall array allowing to easily grab the month with the least rainfall.
var sortFn = function(a, b) {
    // Compare rainValue Specifically.
    return a.rainValue - b.rainValue;
}


// Calculations
// This part loops through and asssings a random value between 1 - 10 to serve as inches of rain.
for(var i = 0, cnt = MONTHS.length; i < cnt; i++) {
    // Creating a month prototype for filling the array with.
    let month = {
        rainMonth: MONTHS[i],
        rainValue: Math.ceil(Math.random() * 10)
    }
    rainfall.push(month);
}

// Using the sort function.
rainfall = rainfall.sort(sortFn);

// Display Values
console.log("Welcome to Rainfall\n");
console.log("I have aggregated the last 12 months of rainfall,");
console.log("and figured out which month had the least rain! \n");
console.log(`My results indicate that ${rainfall[0].rainMonth} had the least rain.\n`);
console.log(`${rainfall[0].rainMonth} had a total of ${rainfall[0].rainValue}" of rain!\n`);
console.log("Thank you for using Rainfall!");