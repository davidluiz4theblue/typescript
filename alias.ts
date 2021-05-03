/**
 * TODO: Alias Types
 */

/**
 * Declare type name for variable get this type
 */
type numberType = number;
let ten: numberType = 10;
// ten = "10"; //// Cannet assign String to Number variables

type dynamicString = string | string[] | number;
// myName can has a type String , Array String or Number
const myName: dynamicString = "Master Knight";
console.log(myName);
