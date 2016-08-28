// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

////// WRITE A FUNCTION THAT TAKES ... AND RETURNS ... //////

// Takes: an array of numbers
// Returns: the sum of whatever numbers are passed in;
//          if the array is empty, return 0;
var sumOfNums = function(numsArray){
  // Your Code Here
};

// Takes: an array of numbers
// Returns: an array of numbers from the first array that were strictly greater
//          than (i.e. greater than but not equal to) 10
var numsGreaterThanTen = function(numsArray){
  // Your Code Here
};

// Takes: an array of numbers
// Returns: `true` if ALL numbers were strictly greater than 10;
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var allGreaterThanTen = function(numsArray){
  // Your Code Here
};

// Takes: an array of words
// Returns: an array of all words from the first array with five or more letters
var wordsWithAtLeastFiveLetters = function(words){
  // Your Code Here
};

// Takes: an array of words
// Returns: `true` if ALL words start with the letter 'a' (case-insensitive),
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var allStartingWithA = function(words){
  // Your Code Here
};

// Takes: an array of words
// Returns: `true` if there are ANY words that start with the letter 'b'
//          (case-insensitive), `false` otherwise
var anyStartingWithB = function(words){
  // Your Code Here
};

// Takes: a single word and a number (`n`)
// Returns: `true` if the word has at least some number (`n`) of vowels,
//          `false` otherwise
//    Assume that vowels are 'a', 'e', 'i', 'o', and 'u' (NOT 'y')
// Edge Case: If `n` is less than zero, return `null`.
var hasAtLeastNVowels = function(word, n){
  // Your Code Here
};

// Takes: an array of words
// Returns: an array of words from the original array that have at least two
//          vowels
var wordsWithAtLeastTwoVowels = function(words){
  // Your Code Here
};

// Takes: an array of words
// Returns: `true` if ALL words have two or more vowels, `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var allHaveAtLeastTwoVowels = function(words){
  // Your Code Here
};

// Takes: an array of words
// Returns: `true` if there are ANY words have two or more vowels,
//          `false` otherwise.
var anyHaveAtLeastTwoVowels = function(words){
  // Your Code Here
};

// Takes: an array of words
// Returns: `true` if NONE of the words have two or more vowels,
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var noneHaveTwoOrMoreVowels = function(words){
  // Your Code Here
};

// Takes: an array of words
// Returns: an object ({}) where each word in the array is a key, and the value
//          tied to that key is the length of the word.
// e.g. given ['cat', 'horse', 'elephant'],
//      return { 'cat': 3, 'horse': 5, 'elephant': 8}
var buildObjectFromWords = function(words){
  // Your Code Here
};


/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  sumOfNums: sumOfNums,
  numsGreaterThanTen: numsGreaterThanTen,
  allGreaterThanTen: allGreaterThanTen,
  wordsWithAtLeastFiveLetters: wordsWithAtLeastFiveLetters,
  allStartingWithA: allStartingWithA,
  anyStartingWithB: anyStartingWithB,
  hasAtLeastNVowels: hasAtLeastNVowels,
  wordsWithAtLeastTwoVowels: wordsWithAtLeastTwoVowels,
  allHaveAtLeastTwoVowels: allHaveAtLeastTwoVowels,
  anyHaveAtLeastTwoVowels: anyHaveAtLeastTwoVowels,
  noneHaveTwoOrMoreVowels: noneHaveTwoOrMoreVowels,
  buildObjectFromWords: buildObjectFromWords
}
