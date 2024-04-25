// 3) Numerical Comparisons:
// Perform equality and inequality checks on given numbers.
// Include tests to check if one number is greater than, less than, greater than or equal to, and less than or equal to another.
// At least one test should yield a True result and another should yield False. code in typescript

//created two variables
let number1 = 10;
let number2 = 20;

// Perform equality and inequality checks on given numbers.
const greaterThanLessThan: boolean = number1 > number2 && number1 < number2;
console.log(greaterThanLessThan); //result false

const greaterThanEqualTo_lessThanEqualTo_: boolean =
  number1 >= number2 || number1 <= number2;
console.log(greaterThanEqualTo_lessThanEqualTo_); //result true
