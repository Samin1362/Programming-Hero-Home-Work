/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

let i = 2;
while (true){
  if (Number.isInteger(Math.sqrt(i))){
    console.log("Square number found which is ", i);
    break;
  }
  i++;
}