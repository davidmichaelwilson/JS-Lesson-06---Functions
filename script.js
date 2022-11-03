// CHALLENGE ONE

// let [firstName, lastName] = ["David","Wilson"]
// let fullName = (firstName + ' ' + lastName)
//   console.log(fullName)


// CHALLENGE TWO

// let name = "Kirk"
// let title = "Captain"
// let greeting = "Hi there"

// function createStatement() {
//  let myStatement = greeting + ", " + title + ' ' + name + "!"
//   console.log(myStatement)
// }
// createStatement()


// CHALLENGE THREE

let pointsElement = document.getElementById("points-element")
let myPoints = 2

function addBonusPoints() {
  myPoints = myPoints + 5
  pointsElement.innerText = myPoints
}

function removePoint() {
  myPoints = myPoints - 1
  pointsElement.innerText = myPoints
}


// CHALLENGE FOUR

// console.log("2" + 6) // 26
// console.log(21 + 7) // 28
// console.log(6 + "43") // 643
// console.log("My score: " + 8 + 8) // My score: 88
// console.log(2 + 2) //  4
// console.log("11" + "15" + 22) // 111522