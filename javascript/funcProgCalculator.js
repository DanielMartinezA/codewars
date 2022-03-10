/*
https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript
This time we want to write calculations using functions and get the results.
Let's have a look at some examples:
  seven(times(five())); // must return 35
  four(plus(nine())); // must return 13
  eight(minus(three())); // must return 5
  six(dividedBy(two())); // must return 3

Requirements:
  There must be a function for each number from 0 ("zero") to 9 ("nine")
  There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
  Each calculation consist of exactly one operation and two numbers
  The most outer function represents the left operand, the most inner function represents the right operand
  Division should be integer division. For example, this should return 2, not 2.666666...:
    eight(dividedBy(three()));
*/
function digit(value, arg) {
  let parameter = arg.parameter
  switch (arg.operand) {
    case "+":
      return value + parameter
      break;
    case "-":
      return value - parameter
      break;
    case "*":
      return value*parameter
      break;
    case "/":
      return parameter ? Math.trunc(value/parameter) : undefined
      break;
  }
}
function zero(arg) {
  if (arg) {
    return digit(0,arg)
  } else {
    return 0
  }
}
function one(arg) {
  if (arg) {
    return digit(1,arg)
  } else {
    return 1
  }
}
function two(arg) {
  if (arg) {
    return digit(2,arg)
  } else {
    return 2
  }
}
function three(arg) {
  if (arg) {
    return digit(3,arg)
  } else {
    return 3
  }
}
function four(arg) {
  if (arg) {
    return digit(4,arg)
  } else {
    return 4
  }
}
function five(arg) {
  if (arg) {
    return digit(5,arg)
  } else {
    return 5
  }
}
function six(arg) {
  if (arg) {
    return digit(6,arg)
  } else {
    return 6
  }
}
function seven(arg) {
  if (arg) {
    return digit(7,arg)
  } else {
    return 7
  }
}
function eight(arg) {
  if (arg) {
    return digit(8,arg)
  } else {
    return 8
  }
}
function nine(arg) {
  if (arg) {
    return digit(9,arg)
  } else {
    return 9
  }
}

function plus(arg) { return {operand: "+", parameter: Number(arg)} }
function minus(arg) { return {operand: "-", parameter: Number(arg)} }
function times(arg) { return {operand: "*", parameter: Number(arg)} }
function dividedBy(arg) { return {operand: "/", parameter: Number(arg)} }

/* Solution from other people - I need to study functional programming*/
['zero_', 'one_', 'two_', 'three_', 'four_', 'five_', 'six_', 'seven_', 'eight_', 'nine_']
.forEach(function (name, n) {
  this[name] = function (f) { return f ? f(n) : n }
});

function plus_(n)      { return function (a) { return a + n } }
function minus_(n)     { return function (a) { return a - n } }
function times_(n)     { return function (a) { return a * n } }
function dividedBy_(n) { return function (a) { return a / n } }