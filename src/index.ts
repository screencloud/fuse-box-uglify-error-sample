
import { shouldReturnSomeString } from "./lib";

const result = shouldReturnSomeString(12);

console.log("-----------------------------------");
console.log("shouldReturnSomeString(12)", result);
console.log("-----------------------------------");

process.exit(!result && 1 || 0);
