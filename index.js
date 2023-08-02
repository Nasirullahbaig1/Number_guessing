/* Create a random number and store that in a variable and then ask the user to guess the number and show that the gussed number is less or greater then the original number*/

function rendom(min, max) {
  return Math.random() * (max - min) + min;
}

let chances = 0;
let org = Math.round(rendom(1, 100));
// console.log(a);

while (true) {

  let guss = prompt("The computer has created a random number guess that number from 1 to 100 : ")
  // console.log(guss)
  guss = Number.parseInt(guss);
  // console.log(typeof(guss))

  if (guss == org) {
    console.log("Congratulations! You guessed the number correctly in " + chances + " attempts..")
    break;
  }
  else {
    console.log("The guess is incorrect ");
    chances++;
  }

  if (guss < org) {
    console.log("Your guess is too low.")
  }
  else {
    console.log("Your guess is too high.")
  }
  console.log(100 - chances + " chances left...")
}