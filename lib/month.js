
"use strict";
const _ = require('lodash');
const getZDay  = require('./zellers').getDay;

console.log('month file is running');

//this is calling the months
const monthFun= function (month) {

  let date = new Date();
  let locale = "en-us";
  month = date.toLocaleString(locale, { month: "long" });
  let monthNum = date.toLocaleString(locale, { month: "numeric" });

  console.log("month",month);

  return month;
};

  //This is getting the current year
const yearDate = function (year) {
  let date = new Date();
  let locale = "en-us";
  year = date.toLocaleString(locale, { year: "numeric" });

  console.log("year",year)
  return year;
}


//this is calling the days
const weekDays = function () {
  let weekDays = `Su Mo Tu We Th Fr Sa`;

  console.log("weekdays",weekDays);

  return weekDays;
}


const currentMonth = function (year, month) {
  let date = new Date();
  let locale = "en-us";

  //This is getting the numbers from 1 to the end of the month(total amount).
  let monthNum = date.toLocaleString(locale, { month: "numeric" });
  year = date.toLocaleString(locale, { year: "numeric" });



  //this is returning the amount of days in a month to have a limit to give the for loop
  let days = new Date(year, monthNum, 0).getDate();

  let str = [];

  for(var i = 0; i < days.length; i++) {
      if (i <= 9) {
          let nums = ` i `;
          str += nums;
        } else {
          let otherNums = `i `;
          str += otherNums;
        };
     };

     console.log("str",str)

    return days;
};

module.exports = {
  weekDays:weekDays,
  monthFun:monthFun,
  yearDate:yearDate,
  currentMonth:currentMonth
}

