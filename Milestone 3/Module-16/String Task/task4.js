// Task-4:

// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

const str = "If a given string has either x, replace x by y. if the given string has X, replace it by Y.";

let index = 0;
let newString = '';
for (const i of str){
  if (i === 'x'){
    newString += 'y';
    index++;
    continue;
  } else if (i === 'X'){
    newString += 'Y';
    index++;
    continue;
  }
  newString += i;
  index++;
}

console.log(newString);