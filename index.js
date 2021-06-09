//console.log(4 === 3)  // false
//console.log(5 > 2)    // true
//console.log(12 > 12)  // false
//console.log(3 < 0)    // false
//console.log(3 >= 3)   // true
//console.log(11 <= 11) // true
//console.log(3 <= 2)   // false



let cards = []//Array oredered list of items

let messageEl = document.getElementById("message-el")
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")


let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
//object structure
let playerEl = document.getElementById("player-el")

let player = {
    name: "Erik",
    chips: 145
}
playerEl.textContent = player.name + ": $" + player.chips
//end object structure
function getRandomCard() {
  let randomNumber = Math.floor( Math.random() * 13 ) + 1
    if (randomNumber > 10) {
      return 10
    } else if (randomNumber === 1) {
      return 11
    } else {
      return randomNumber
    }
  }



function startGame() {
isAlive = true
let firstCard = getRandomCard()
let secondCard = getRandomCard()
cards = [firstCard, secondCard]
sum = firstCard + secondCard
  renderGame()

}

function renderGame() {
  sumEl.textContent = "Sum: " + sum
  cardEl.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " "
  }
  if (sum <= 20) {
    message = "Do you want to draw a new card?"
  } else if(sum === 21){
    message = "You have blackjack"
    hasBlackJack = true
  } else {
    message = "You're out of the game"
    isAlive = false
  }
  messageEl.textContent = message
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
  let card = getRandomCard()
  sum += card
  cards.push(card)
  renderGame()
}
}


//Cash out

//console.log(hasBlackJack)
//console.log(isAlive)
//let age = 100

//if (age < 100) {
//  console.log("Not eligible")
//} else if (age === 100) {
//  console.log("Here is your birthday card from the King!")
//} else {
//  console.log("Not eligible, you have already gotten one")
//}


// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
//for ( let count = 1;  count < 11;  count += 1 )  {

//    console.log(count)

//}

//let messages = [
//    "Hey, how's it going?",
//    "I'm great, thank you! How about you?",
//    "All good. Been working on my portfolio lately.",
//    "Same here!",
//    "Great to hear"
//]

// DRY - Don't repeat yourself
// console.log(messages[0])
// console.log(messages[1])
// console.log(messages[2])
// console.log(messages[3])

//for (let i = 0; i < 5; i += 1) {
//    console.log(messages[i])
//}

//let cardigan = [7, 3, 9]

//for (let i = 0; i < cardigan.length; i++) {
//  console.log(cardigan[i])
//}

//let sentence = ["Hello ", "my ", "name ", "is ", "Per"]
//let meetingEl = document.getElementById("meeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent

//for (let i = 0; i < sentence.length; i++) {
//  meetingEl.textContent += sentence[i]
//}
