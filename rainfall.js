/*
Write a program that stores the total rainfall for each of the 12 months of the year into an array. 
Use a random number for the rainfall’s value. 
The program should determine which of the months had the least amount of rain.

I would handle this one by creating an empty array variable to hold the rainfall for each month. 
This array would be full of month objects with the month, and a rainfall value. Also I would make a constant array 
of the months with their names, and a variable which would help in comparing the the rainfall values.
Next I create a loop that will run 12 times. In this loop I would generate a random number, 
which will be considered the rainfall value. This and the corresponding month in months array
would be assigned to a month object and pushed into the rainfall array. Now we can loop through the array and 
compare values to see which is smallest and display it!
*/

// Pseudocode
/*
--Variables and Constants--
Declare Empty Array rainfall.
Declare Constant Array MONTHS.
Declare Numeric coutner.

--Calculations--
Loop once for each month in the month array:
    Assign a random number between 1 and 10 to rainfall.
    Push an object of month with a values of rainMonth and rainValue.
Loop through the rainfall array:
    if the month position + 1 is NOT undefined:
        if rainValue for the month position is less than month position + 1:
            make counter month position.
        else if the rainValues are equal:
            make counter month position.
        else:
            make counter month position + 1.
            
--Display Values--
Display "Welcome to Rainfall"
Display "I have aggregated the last 12 months of rainfall,"
Display "and figured out which month had the least rain!"
Display `My results indicate that ${rainfall[counter].rainMonth} had the most rain.`
Display `${rainfall[counter].rainMonth} had a total of ${rainfall[counter].rainValue} inches of rain!`
Display "Thank you for using Rainfall!"
*/

// Constants and Variables
var rainfall = [];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
var counter = 0

// Calculations
for(var i = 0, cnt = MONTHS.length; i < cnt; i++) {
    let month = {
        rainMonth: MONTHS[i],
        rainValue: Math.ceil(Math.random() * 10)
    }
    rainfall.push(month);
}

for(var i = 0, cnt = rainfall.length; i < cnt; i++){
    if (rainfall[i + 1] != undefined){
        if(rainfall[i].rainValue < rainfall[i + 1].rainValue){
            counter = i;    
        } else if (rainfall[i].rainValue == rainfall[i + 1].rainValue){
            counter = i;
        } else {
            counter = i + 1;
        }
    }
}

// Display Values
console.log("Welcome to Rainfall");
console.log("I have aggregated the last 12 months of rainfall,");
console.log("and figured out which month had the least rain!");
console.log(`My results indicate that ${rainfall[counter].rainMonth} had the most rain.`);
console.log(`${rainfall[counter].rainMonth} had a total of ${rainfall[counter].rainValue} inches of rain!`);
console.log("Thank you for using Rainfall!");