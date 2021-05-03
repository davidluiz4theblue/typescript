/**
 * TODO: Array Typescript
 */

/**
 * Array Number
 */
const numberList: number[] = [1, 2, 3];

numberList.push(4);
// numberList.push("Five"); // //Cannot push String to "Array Number"

/**
 * Array String
 */
const Character: string[] = ["Leon", "Ada", "Chris", "Claire"];

Character.push("Nano");
// Character.push(6); // // Cannot push String to "Array Number"

/**
 * Array some
 */
const info: (string | number | boolean)[] = [123, "Ricardo", false]; // // Declare some types in array

/**
 * Array any
 */
const technicle: any[] = ["html", 4466, "Javascript", false]; // // Declare "any" types in array

console.log(technicle);
