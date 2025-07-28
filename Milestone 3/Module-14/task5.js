
const num1 = 2;
const num2 = 3;

let result = 1;

if (num1 > num2) {
  result = num1 * 2;
} else {
  result = num1 + num2;
}
console.log(result);

const ternaryResult = (num1 > num2) ? num1 * 2 : num1 + num2;
console.log(ternaryResult);