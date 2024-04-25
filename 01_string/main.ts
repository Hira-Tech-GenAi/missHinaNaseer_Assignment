// Write a TypeScript   that performs a comprehensive set of conditional tests to evaluate various conditions and output whether each test passed or failed. Ensure that at least one test returns True and another returns False for each category of condition listed below:

// 1) String Equality and Inequality:
// Check if two given strings are equal or not.
// Ensure there is one test that should return True and another that should return False.

//create a function to check String Equality and Inequality

function stringEqualityInequalityCheck(str1: string, str2: string): boolean {
  return str1 === str2;
}

//check conditions

const condition1 = stringEqualityInequalityCheck("Hira", "Hira"); //true
const condition2 = stringEqualityInequalityCheck("Hira", "Khalid"); //false

console.log(`condition 1: Strings are equal? ${condition1}`);
console.log(`condition 2: Strings are equal? ${condition2}`);
