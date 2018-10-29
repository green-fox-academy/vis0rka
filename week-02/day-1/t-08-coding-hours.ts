'use strict';

var dailyCodeHours = 6;
var semesterWeeks = 17;
var workDays = 5;
var workHoursWeekly = 52;

var codingHours = dailyCodeHours*workDays*semesterWeeks;
var hoursInSemester = semesterWeeks*workHoursWeekly

var percentageOfHours = codingHours/hoursInSemester*100

console.log("coding hours in a semester: " + codingHours + " hours");
console.log("percentage of the coding hours in the semester: " + percentageOfHours.toFixed(2) +"%")

