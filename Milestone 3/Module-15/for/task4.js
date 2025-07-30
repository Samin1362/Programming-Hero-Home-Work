/***

Generate a multiplication table for number 9

 */

for (let i=1, j=1; i<= 90; i++){
  if (i%9 == 0){
    console.log(j + " * 9 = ", i);
    j++;
  }
}