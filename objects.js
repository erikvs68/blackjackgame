// Objects - store data in-depth - composite / complex data type
// key-value pairs

// let course = {
//     title: "Learn CSS Grid for free",
//     lessons: 16,
//     creator: "Per Harald Borgen",
//     length: 63,
//     level: 2
//     isFree: true,
//     tags: ["html", "css"]
// }
//
// console.log(course.tags)

// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

// let accomListing = {
//   title: "Charming Lodge with heated outdoor pool",
//   superhost: true,
//   reviews: count,
//   images: [1, 2, 3, 4, 5],
//   guests: 4,
//   bedrooms: 2,
//   beds: 3,
//   bathroom: 1,
//   checkinDate: Date,
//   checkoutDate: Date
// }
//
// console.log(accomListing.title)
// console.log(accomListing.superhost)

// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format:
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works

// let person = {
//   name: "Erik",
//   age: 52,
//   country: "United Kingdom"
// }
//
// function logData(){
//   console.log(person.name + "is " + person.age + "years old and lives in " + person.country)
// }
// logData()
// let age = 15

// less than 6 years old -> free
// 6 to 17 years old     -> child discount
// 18 to 26 years old    -> student discount
// 27 to 66 years old    -> full price
// over 66 years old     -> senior citizen discount

// Create a conditional statement (if/else/else if) that logs out the discount
// the passenger will get based upon the value of the age variable

// if (age < 6) {
//     console.log("free")
// } else if (age < 18) {
//     console.log("child discount")
// } else if (age < 27) {
//     console.log("student discount")
// } else if (age < 67) {
//     console.log("full price")
// } else {
//     console.log("senior citizen discount")
// }
//let largeCountries = ["China","India","USA","Indonesia","Pakistan"]

/* Use a for loop to log the following to the console:

The 5 largest countries in the world:
- China
- India
- United States
- Indinesia
- Pakistan
*/
// console.log("The 5 largest countries in the world:")
// for (let i = 0; i < largeCountries.length; i++) {
//   console.log("- " + largeCountries[i])
// }


// function convertToRoman(num) {
//   //create key:value pairs
//   var romanLookup = {M:1000, D:500, C:100, L:50, X:10, V:5, I:1};
//   var roman = [];
//   var romanKeys = Object.keys(romanLookup);
//   var curValue;
//   var index;
//   var count = 1;
//
//   for(var numeral in romanLookup){
//     curValue = romanLookup[numeral];
//     index = romanKeys.indexOf(numeral);
//
//     while(num >= curValue){
//
//       if(count < 4){
//         //push up to 3 of the same numeral
//         roman.push(numeral);
//       } else {
//         //else we had to push four, so we need to convert the numerals
//         //to the next highest denomination "coloring-up in poker speak"
//
//         //Note: We need to check previous index because it might be part of the current number.
//         //Example:(9) would attempt (VIIII) so we would need to remove the V as well as the I's
//         //otherwise removing just the last three III would be incorrect, because the swap
//         //would give us (VIX) instead of the correct answer (IX)
//         if(roman.indexOf(romanKeys[index - 1]) > -1){
//           //remove the previous numeral we worked with
//           //and everything after it since we will replace them
//           roman.splice(roman.indexOf(romanKeys[index - 1]));
//           //push the current numeral and the one that appeared two iterations ago;
//           //think (IX) where we skip (V)
//           roman.push(romanKeys[index], romanKeys[index - 2]);
//         } else {
//           //else Example:(4) would attemt (IIII) so remove three I's and replace with a V
//           //to get the correct answer of (IV)
//
//           //remove the last 3 numerals which are all the same
//           roman.splice(-3);
//           //push the current numeral and the one that appeared right before it; think (IV)
//           roman.push(romanKeys[index], romanKeys[index - 1]);
//         }
//       }
//       //reduce our number by the value we already converted to a numeral
//       num -= curValue;
//       count++;
//     }
//     count = 1;
//   }
//   return roman.join("");
// }
//
// convertToRoman(36);


//let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// You need to help me fixup the largeCountries array so that
// China and Pakistan are added back into their respective places

// Use push() & pop() and their counterparts unshift() & shift()
// Google how to use unshift() and shift()
// largeCountries.pop("Monaco")
// largeCountries.push("Pakistan")
// largeCountries.shift("Tuvalu")
// largeCountries.unshift("China")
//
// console.log(largeCountries)

//let dayOfMonth = 13
//let weekday = "Friday"

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&

//if (dayOfMonth === 13 && weekday === "Friday") {
//  console.log("😱")
//}

//let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

//function game() {
//    let randomIndex = Math.floor(Math.random()* 3)
//    return hands[randomIndex]

//    }
//console.log(game())

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

// Create a function that puts the apples onto the appleShelf
// and the oranges onto the orangeShelf. Use a for loop,
// a conditional statement, and the textContent property.
function sortFruit() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎"
        } else if (fruit[i] === "🍊") {
            orangeShelf.textContent += "🍊"
        }
    }
}

sortFruit()
