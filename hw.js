// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.
"use strict";
/// DO NOT EDIT ABOVE THIS LINE ///

////// WRITE A FUNCTION THAT TAKES ... AND RETURNS ... //////

// Takes: an array of numbers
// Returns: the sum of whatever numbers are passed in;
//          if the array is empty, return 0;
var sumOfNums = function(numsArray) {
    var sum = 0;
    for (var i = 0; i < numsArray.length; i++) {
        sum += numsArray[i];
    }
    return sum;
    //// alternatively, using Array methods
    // return numsArray.reduce(function(a, b){ return a + b; });
};

// Takes: an array of numbers
// Returns: an array of numbers from the first array that were strictly greater
//          than (i.e. greater than but not equal to) 10
var numsGreaterThanTen = function(numsArray) {
    var results = [];
    for (var i = 0; i < numsArray.length; i++) {
        if (numsArray[i] > 10) {
            results.push(numsArray[i]);
        }
    }
    return results;
    //// alternatively, using Array methods
    // return numsArray.filter(function(num){ return num > 10; });
};

// Takes: an array of numbers
// Returns: `true` if ALL numbers were strictly greater than 10;
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var allGreaterThanTen = function(numsArray) {
    for (var i = 0; i < numsArray.length; i++) {
        if (!(numsArray[i] > 10)) {
            return false;
        }
    }
    return true;
    //// alternatively, using Array methods
    // return numsArray.all(function(num){return num > 10;});
};

// Takes: an array of words
// Returns: an array of all words from the first array with five or more letters
var wordsWithAtLeastFiveLetters = function(words) {
    var results = [];
    for (var i = 0; i < words.length; i++) {
        if (words[i].length >= 5) {
            results.push(words[i]);
        }
    }
    return results;
    //// alternatively, using Array methods
    // return words.filter(function(word){ return word.length >= 5; });
};

// Takes: an array of words
// Returns: `true` if ALL words start with the letter 'a' (case-insensitive),
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var allStartingWithA = function(words) {
    for (var i = 0; i < words.length; i++) {
        if (!(words[i].slice(0, 1) === 'a' || words[i].slice(0, 1) === 'A')) {
            /// equivalently, `if (words[i].slice(0,1) !== 'a' && words[i].slice(0,1) !== 'a' )`
            /// You could also write `if (!words[i].toLowerCase().startsWith('a')) { ... }`
            return false;
        }
    }
    return true;
    //// alternatively, using Array methods
    // return words.all(function(word){
    //   return words[i].slice(0,1) === 'a' || words[i].slice(0,1) === 'A';
    // });
};

// Takes: an array of words
// Returns: `true` if there are ANY words that start with the letter 'b'
//          (case-insensitive), `false` otherwise
var anyStartingWithB = function(words) {
    for (var i = 0; i < words.length; i++) {
        if (words[i].slice(0, 1) === 'b' || words[i].slice(0, 1) === 'B') {
            return true;
        }
    }
    return false;
    //// alternatively, using Array methods
    // return words.some(function(word){
    //   return words[i].slice(0,1) === 'b' || words[i].slice(0,1) === 'B';
    // });
};

// Takes: a single word and a number (`n`)
// Returns: `true` if the word has at least some number (`n`) of vowels,
//          `false` otherwise
//    Assume that vowels are 'a', 'e', 'i', 'o', and 'u' (NOT 'y')
// Edge Case: If `n` is less than zero, return `null`.
var hasAtLeastNVowels = function(word, n) {
    if (n < 0) {
        return null;
    }
    var count = 0;
    for (var i = 0; i < word.length; i++) {
        if (word.charAt(i) === 'a' || word.charAt(i) === 'A' ||
            word.charAt(i) === 'e' || word.charAt(i) === 'E' ||
            word.charAt(i) === 'i' || word.charAt(i) === 'I' ||
            word.charAt(i) === 'o' || word.charAt(i) === 'O' ||
            word.charAt(i) === 'u' || word.charAt(i) === 'U'
        ) {
            count++;
        }
    }
    return count >= n;
    //// using a combination of array methods and regular expressions
    // return word.match(/[aeiouAEIOU]/).length >= n;
};

// Takes: an array of words
// Returns: an array of words from the original array that have at least two
//          vowels
var wordsWithAtLeastTwoVowels = function(words) {
    var results = [];
    for (var i = 0; i < words.length; i++) {
        if (hasAtLeastNVowels(words[i], 2)) {
            results.push(words[i]);
        }
    }
    return results;
    //// alternatively, using Array methods
    // return words.filter(function(word){
    //   return hasAtLeastNVowels(word, 2);
    // });
};

// Takes: an array of words
// Returns: `true` if ALL words have two or more vowels, `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var allHaveAtLeastTwoVowels = function(words) {
    for (var i = 0; i < words.length; i++) {
        if (!hasAtLeastNVowels(words[i], 2)) {
            return false;
        }
    }
    return true;
    //// alternatively, using Array methods
    // return words.all(function(word){
    //   return hasAtLeastNVowels(word, 2);
    // });
};

// Takes: an array of words
// Returns: `true` if there are ANY words have two or more vowels,
//          `false` otherwise.
var anyHaveAtLeastTwoVowels = function(words) {
    for (var i = 0; i < words.length; i++) {
        if (hasAtLeastNVowels(words[i], 2)) {
            return true;
        }
    }
    return false;
    //// alternatively, using Array methods
    // return words.some(function(word){
    //   return hasAtLeastNVowels(words[i], 2);
    // });
};

// Takes: an array of words
// Returns: `true` if NONE of the words have two or more vowels,
//          `false` otherwise
// Edge Case: If the array is empty, the function should return `true`.
var noneHaveTwoOrMoreVowels = function(words) {
    for (var i = 0; i < words.length; i++) {
        if (hasAtLeastNVowels(words[i], 2)) {
            return false;
        }
    }
    return true;
    //// alternatively, using Array methods
    // return words.all(function(word){
    //   return !hasAtLeastNVowels(word, 2);
    // });
};

// Takes: an array of words
// Returns: an object ({}) where each word in the array is a key, and the value
//          tied to that key is the length of the word.
// e.g. given ['cat', 'horse', 'elephant'],
//      return { 'cat': 3, 'horse': 5, 'elephant': 8}
var buildObjectFromWords = function(words) {
    var result = {};
    for (var i = 0; i < words.length; i++) {
        result[words[i]] = words[i].length;
    }
    return result;
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
