//let randomNumber = Math.random() * 6 // e.g. for a dice

//console.log(randomNumber)

//let flooredNumber = Math.floor(3.45632)

//console.log(flooredNumber)
/*

What does Math.random() do?

Your answer:

*/
//let randomNumber = Math.floor( Math.random() * 6 ) + 1

//console.log(randomNumber)



//Write down all the possible values randomNumber can hold now!
// will go from 0|1|2|3|4|5 to 1|2|3|4|5|6 for dice

function rollDice() {
  let randomNumber = Math.floor( Math.random() * 6 ) + 1
 return randomNumber

}

console.log(rollDice())
