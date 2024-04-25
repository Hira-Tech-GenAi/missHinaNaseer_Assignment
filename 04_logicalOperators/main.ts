// 4) Logical Operators :
// Test with logical "and" to ensure two conditions are both true.
// Test with logical "or" to ensure at least one condition is true.
// Ensure you have tests that return both True and False. 

 const isLogin = true;
 const isFollow = false;

//returns false
 let and_Condition = isLogin && isFollow;// in && both  conditions should be true
console.log(and_Condition);

//returns true
let or_Condition = isLogin || isFollow;//in || at least one condition must be true
console.log(or_Condition);

