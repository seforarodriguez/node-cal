
"use strict";
const _ = require('lodash');

console.log('month file is running');

const blankSpaceControl = function() {
  let blankSpace = `                    \n`


  return blankSpace;

}

const currentMonth = function (month, year) {
    let date = new Date();
    let locale = "en-us";
    let dayNames =`Su Mo Tu We Th Fr Sa`

    //this is getting current month name
    month = date.toLocaleString(locale, { month: "long" });

    //This is getting the current year
    year = date.toLocaleString(locale, { year: "numeric" });

    let totalDays = new Date(0).getDate();
    let daysNum = _.range(1, totalDays + 1)
    let str = '';
    //Trying the number spacing to work
    for(var i = 0; i < daysNum.length; i++) {
      if (i <= 9) {
          let nums = ` ${daysNum[i]} `;
          console.log(i)
          str += nums;
          console.log(str)
        } else {
          let otherNums = ` ${daysNum[i]}`;
          str += otherNums;
          console.log(str)
        };
          //fullMonthDates = `${nums[i]}${otherNums[i]}`;
     };

     console.log("it",str);

    //This is concatinating the month info
    let finalMonth = `    ${month} ${year}\n${dayNames}\n${str}\n`;
    return finalMonth;

};

const weekdays = function () {
    let dayNames =`Su, Mo, Tu, We, Th, Fr, Sa`;
}

module.exports = {
  currentMonth: currentMonth,
  blankSpaceControl: blankSpaceControl
}
