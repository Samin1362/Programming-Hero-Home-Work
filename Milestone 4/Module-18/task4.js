// Task 4 (Hard)

// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// Input: const statement = 'I am a hard working person'

// Output:

// 'person working hard a am I'

const statement = 'I am a hard working person';
const splited = statement.split(" ");

let newStatement = [];

for(const word of splited){
  newStatement.unshift(word);
}

console.log(newStatement);