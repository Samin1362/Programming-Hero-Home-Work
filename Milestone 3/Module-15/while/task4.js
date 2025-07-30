/***

As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

 */

let i = 1;
let j = 1;
while (i <= 50) {
  if (i%5 == 0){
    console.log(j + " * 5 = ", i);
    j++;
  }
  i++;
}