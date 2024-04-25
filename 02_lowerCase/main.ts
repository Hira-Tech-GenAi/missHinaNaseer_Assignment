

// 2) Using Lowercase Function:
// Convert a given string to lowercase and compare it with another lowercase string.
// Write at least one test that should return True and another that should return False.

//create a function to Convert a String lowercase and compare it with another lowercase string

function stringCaseCheck(str1: string, str2: string): boolean {
  return str1.toLowerCase() === str2;
}

//check conditions

const result1 = stringCaseCheck("KHALID", "khalid"); //true
const result2 = stringCaseCheck("hira", "HIRA"); //false

console.log(`condition 1: string to lowercase and compare it with another lowercase string ? ${result1}`);
console.log(`condition 2: string to lowercase and compare it with another lowercase string? ${result2}`);
