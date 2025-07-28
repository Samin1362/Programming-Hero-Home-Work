
const height = 1.75;
const weight = 72;

const bmi = weight / (height^2);

if (bmi < 18.5) {
  console.log("you are underweight.")
} else if ((bmi >= 18.5) && (bmi <= 24.9)) {
  console.log("you are normal.");
} else {
  console.log("you are obese.")
}
