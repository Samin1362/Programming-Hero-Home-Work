// Task-2:

// Count how many times a string has the letter a or A

const str = "A young artist named Ava always admired abstract art. As a child, she painted apples, animals, and airy landscapes with amazing accuracy. As she aged, Ava adopted acrylics and allowed her imagination to animate every artwork. Although art school was an aspiration, Ava advanced alone, analyzing ancient techniques and adapting her approach. A gallery eventually appreciated her authentic style and awarded her a solo appearance. Astonished and appreciative, Ava announced her achievement to all. Art, after all, was always her anchor. Against all adversity, Ava’s ambition and ardor allowed her to ascend as an admired and accomplished artist."

let counta = 0;
let countA = 0;

for (const as of str){
  if (as === 'a'){
    counta++;
  } else if (as === 'A'){
    countA++;
  }
}

console.log("Number of a is : " + counta + " Number of A is : " + countA);