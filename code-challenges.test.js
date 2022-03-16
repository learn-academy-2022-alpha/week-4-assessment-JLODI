// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

describe("shuffleArray", () => {
    it("returns an array of colors randomized, with the first one removed", () => {
        expect(shuffleArray(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
        expect(shuffleArray(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
})

// FAIL  ./code-challenges.test.js
//  shuffleArray
//    ✕ returns an array of colors randomized, with the first one removed (1 ms)
//
//  ● shuffleArray › returns an array of colors randomized, with the first one removed
//
//    ReferenceError: shuffleArray is not defined

// b) Create the function that makes the test pass.

// pseudo code:
// define a function that takes in an array
// removes the first element in the array
// assign new empty array
// assign a temporary array thats a copy of the array
// itterate through temp
// takes random element from temp array and pushes to new array
// removes selected element from temp array
// return new array

const shuffleArray = (array) => {
    array.shift();
    let tempArray = [...array];
    let newArray = [];
  for (let i = 0; i < array.length; i++){
    const newI = Math.floor(Math.random() * (tempArray.length));
    newArray.push(tempArray[newI]);
    tempArray.splice(newI,1);
    }
  return newArray
}

// PASS  ./code-challenges.test.js
//  shuffleArray
//    ✓ returns an array of colors randomized, with the first one removed (3 ms)
//
// Test Suites: 1 passed, 1 total

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

const nums1 = [3, 56, 90, -8, 0, 23, 6]
// Expected output: [-8, 90]
const nums2 = [109, 5, 9, 67, 8, 24]
// Expected output: [5, 109]

describe("minMaxNum", () => {
    it("returns an array of numbers of only the minimum and maximum in that order", () => {
        expect(minMaxNum(nums1)).toEqual([-8, 90])
        expect(minMaxNum(nums2)).toEqual([5, 109])
    })
})

// FAIL  ./code-challenges.test.js
//  minMaxNum
//    ✕ returns an array of numbers of only the minimum and maximum in that order (3 ms)
//
//  ● minMaxNum › returns an array of numbers of only the minimum and maximum in that order
//
//    ReferenceError: minMaxNum is not defined


// b) Create the function that makes the test pass.

// psuedo code:
// define a function that takes in an array
// itterates through the array
// sort through numerical order from least to greatest
// splice out second element to second to last element
// return array

const minMaxNum = (array) => {
  newArray = array.sort((a,b)=>a-b);
  newArray.splice(1,array.length - 2);
  return newArray
}

// PASS  ./code-challenges.test.js
//  minMaxNum
//    ✓ returns an array of numbers of only the minimum and maximum in that order (2 ms)
//
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const testArray1 = [3, 7, 10, 5, 4, 3, 3]
const testArray2 = [7, 8, 2, 3, 1, 5, 4]
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]

describe("arrayCombine", (array1, array2) => {
    it("returns one array of numbers from the two arrays with no numbers repeating", () => {
        expect(arrayCombine(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
})

// FAIL  ./code-challenges.test.js
//  arrayCombine
//    ✕ returns one array of numbers from the two arrays with no numbers repeating (1 ms)
//
//  ● arrayCombine › returns one array of numbers from the two arrays with no numbers repeating
//
//    ReferenceError: arrayCombine is not defined


// b) Create the function that makes the test pass.

// pseudo code
// define a function that takes in two arrays
// create an empty array
// itterate through the first array
// write conditional if value is in the new array
// if not, push to new array
// itterate through the second array
// write conditional if value is in the new array
//if not, push to new array
// return new array

const arrayCombine = (array1, array2) => {
  let newArray = [];
  for (let i = 0; i < array1.length; i++){
    if(newArray.indexOf(array1[i]) == -1)
      newArray.push(array1[i])
    }
  for (let i = 0; i < array2.length; i++){
    if(newArray.indexOf(array2[i]) == -1)
      newArray.push(array2[i])
    }
    return newArray
}

// PASS  ./code-challenges.test.js
//  arrayCombine
//    ✓ returns one array of numbers from the two arrays with no numbers repeating (2 ms)
//
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
