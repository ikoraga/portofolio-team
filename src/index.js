function testNotEqual(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }

let notEqual = testNotEqual(3, '3')
let equal = testNotEqual(3, 3)

console.log(`This is not equal ${notEqual} and this is equal ${equal}`)