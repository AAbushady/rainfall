/*global console*/
/*jshint esversion:6*/

(function () {
    'use strict';

    // Constants and Variables
    let rainfall = [];
    const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // This will sort the rainfall array allowing to easily grab the month with the least rainfall.
    let sortFn = function (a, b) {
        return a.rainValue - b.rainValue;
    };


    // Calculations
    // This part loops through and asssings a random value between 1 - 10 to serve as inches of rain.
    for (let i = 0, cnt = MONTHS.length; i < cnt; i++) {
        // Creating a month prototype for filling the array with.
        let month = {
            rainMonth: MONTHS[i],
            rainValue: Math.ceil(Math.random() * 10)
        };
        rainfall.push(month);
    }

    // Using the sort function.
    rainfall = rainfall.sort(sortFn);

    // Display Values
    console.log("Welcome to Rainfall\n");
    console.log("I have aggregated the last 12 months of rainfall,");
    console.log(" and figured out which month had the least rain! \n");
    console.log(`My results indicate that ${rainfall[0].rainMonth} had the least rain.\n`);
    console.log(`${rainfall[0].rainMonth} had a total of ${rainfall[0].rainValue}" of rain!\n`);
    console.log("Thank you for using Rainfall!");
})();
