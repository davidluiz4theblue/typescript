/**
 * TODO: Function Typescript
 */

const sum = (a: number, b: number): number => {
  /**
   * function has type a, b Number & return a Number types
   */
  return a + b;
};

console.log(sum(2, 3));
// console.log(sum(2, "3")); //// Cannot add type String to b

/**
 * "void" declare a function non return values
 *
 */
const funcNoReturn = (name: string, age: number): void => {
  console.log(`my name is ${name} and ${age} year old`);
};

funcNoReturn("Ada", 34);
