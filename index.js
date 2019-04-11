"use strict";

// task 1
function isNumberInRange(props) {
  return props > 0 && props < 10;
}

var res = isNumberInRange(5);
console.log(res);

// task 2
function isEvan(props) {
  return props % 2 === 0;
}

var res2 = isEvan(2);
console.log(res2);

//task 3
var value = +prompt('value?', '');

switch (value) {
  case 0 :
    alert(0);
    break;
  case 1 :
    alert(1);
    break;
  case 2 :
  case 3 :
    alert('2,3');
    break;
  default:
    alert('error');
    break;
}

// task 4
function min(a, b) {
  return a < b ? a : b;
}

var res3 = min(10, -5);
console.log(res3);
