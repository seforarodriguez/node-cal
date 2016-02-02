const modifiedMonth = function (num) {
  if (num <= 2) {
    num += 12;
    return num;
   }
  else {
    return num;
  }
};

const modifiedYear = function (year, num) {
  if (num <= 2) {
    year -= 1;
    return year;
  }
  else {
    return year
  }
};

const getDay = function (year, month, day) {
  console.log(year, month, day);

  modifiedMonth(month);
  modifiedYear(year);

  var h = (day + parseInt(((month + 1) * 26) / 10) +
       year + parseInt(year / 4) + 6 * parseInt(year / 100) + parseInt(year / 400) - 1) % 7;
       console.log("hache",h);
   return h;
}


module.exports = {
  modifiedMonth: modifiedMonth,
  modifiedYear: modifiedYear,
  getDay: getDay
}
