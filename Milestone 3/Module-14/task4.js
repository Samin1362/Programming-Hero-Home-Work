

const myScore = 81;
const friendScore = 40; 

if (myScore > 80) {
  if (friendScore > 80) {
    console.log("go for a lunch. ");
  } else if (friendScore >= 60 && friendScore < 80){
    console.log("good luck next time.");
  } else if (friendScore >= 40 && friendScore < 60) {
    console.log("friend's message unseen.");
  } else if (friendScore < 40) {
    console.log("block your friend");
  }
} else {
  console.log("go to home and sleep and act sad");
}