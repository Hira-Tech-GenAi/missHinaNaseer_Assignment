// 6) Checking Items Not in an Array:
// Test if a specific item is not in a given array.
// Include one test returning True and one returning False.

const arrayOfName: string[] = ["Ali Sher", "Hira Khalid", "Sehrish", "Beenish"];

let arrayOfName1 = arrayOfName.includes("Hira Khalid"); //includes, search element in arr
console.log(`Name: "Hira Khalid" in this array? ${arrayOfName1}`); //true

let arrayOfName2 = arrayOfName.includes("Insharah"); //includes, search element in arr
console.log(`Name: "Insharah" in this array? ${arrayOfName2}`);
