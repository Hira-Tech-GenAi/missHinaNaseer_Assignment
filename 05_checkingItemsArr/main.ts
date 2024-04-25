// 5) Checking Items in an Array: 
// Given an array of items, test if a specific item is in the array.
// Have one test that should return True and another that should return False.
const arrayOfName:string[] = ["Ali Sher", "Hira Khalid", "Sehrish", "Beenish"]

let arrayOfName1 = arrayOfName.includes("Ali Sher")//includes, search element in arr
console.log(arrayOfName1);//true

let arrayOfName2 = arrayOfName.includes("Alishba")//includes, search element in arr
console.log(arrayOfName2);//false

