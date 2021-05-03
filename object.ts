/**
 * TODO: Object Typescript
 */

interface objTypes {
  id: string | number; //// Declare String or Number Value
  name: string;
  core: boolean;
  damage: number;
}
const obj: objTypes = {
  id: "2223",
  name: "Leon",
  core: true,
  damage: 4666,
};
// obj.weapon = "handgun"; ///// Cannot push key in obj has decleare types
console.log(obj);
