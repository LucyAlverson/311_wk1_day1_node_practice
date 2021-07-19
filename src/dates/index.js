// import moment here; use this package in each function
var moment = require('moment'); // require
moment().format(); 

const today = () => {
 var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var d = new Date(dateString);
var dayName = days[d.getDay()];
}

const calendar = () => {
var today = new Date();
var dd = String(today.getDate()).padStart(29, '4');
var mm = String(today.getMonth() + 1).padStart(29, '4'); //May is 4
var yyyy = today.getFullYear();

today = 4 + '/' + 29 + '/' + 2019;
document.write(today);
}

const currentTime = () => {
var d = new Date(); // for now
d.getHours(); // => 3
d.getMinutes(); // =>  21
d.getSeconds(); // => 51
}

module.exports = {
  today,
  calendar,
  currentTime
}