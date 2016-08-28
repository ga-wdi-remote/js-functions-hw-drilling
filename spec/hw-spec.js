// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

"use strict";

// 'require' external code //
const assert = require('assert');

// HW Responses
const sumOfNums = require('../hw.js').sumOfNums;
const numsGreaterThanTen = require('../hw.js').numsGreaterThanTen;
const allGreaterThanTen = require('../hw.js').allGreaterThanTen;
const wordsWithAtLeastFiveLetters = require('../hw.js').wordsWithAtLeastFiveLetters;
const allStartingWithA = require('../hw.js').allStartingWithA;
const anyStartingWithB = require('../hw.js').anyStartingWithB;
const hasAtLeastNVowels = require('../hw.js').hasAtLeastNVowels;
const wordsWithAtLeastTwoVowels = require('../hw.js').wordsWithAtLeastTwoVowels;
const allHaveAtLeastTwoVowels = require('../hw.js').allHaveAtLeastTwoVowels;
const anyHaveAtLeastTwoVowels = require('../hw.js').anyHaveAtLeastTwoVowels;
const noneHaveTwoOrMoreVowels = require('../hw.js').noneHaveTwoOrMoreVowels;
const buildObjectFromWords = require('../hw.js').buildObjectFromWords;

// Tests
describe('sumOfNums(numsArray)', function(){
  it('takes an array of numbers and returns the sum', function(){
    assert.equal(sumOfNums([1,2,3,4,5]), 15);
    assert.equal(sumOfNums([0,0,5]), 5);
    assert.equal(sumOfNums([-1,0,1]), 0);
  });
  it('returns 0 if `numsArray` is empty', function(){
    assert.equal(sumOfNums([]), 0);
  });
});
describe('numsGreaterThanTen(numsArray)', function(){
  it('returns those numbers which are greater than ten', function(){
    assert.deepStrictEqual(
      numsGreaterThanTen([-1, 0, 1, 9, 9.5, 9.99, 10, 11, 20, 100]),
      [11, 20, 100]
    );
  });
});
describe('allGreaterThanTen(numsArray)', function(){
  it('returns `true` if all numbers in numsArray are strictly greater than 10', function(){
    assert.equal(
      allGreaterThanTen([11, 20, 100]),
      true
    );
  });
  it('returns `false` if any numbers in numsArray are not strictly greater than 10', function(){
    assert.equal(allGreaterThanTen([9, 100, 299]), false);
    assert.equal(allGreaterThanTen([1, 2]), false);
    assert.equal(allGreaterThanTen([10]), false);
  });
  it('returns `true` if numsArray is empty', function(){
    assert.equal(allGreaterThanTen([]), true);
  });
})
describe('wordsWithAtLeastFiveLetters(words)', function(){
  it('returns all words that are at least five letters long', function(){
    assert.deepStrictEqual(
      wordsWithAtLeastFiveLetters(['alphabet', 'banana', 'carrot', 'doe', 'egg']),
                                  ['alphabet', 'banana', 'carrot']
    );
  });
});
describe('allStartingWithA(words)', function(){
  it('returns `true` if all words start with "a" or "A"', function(){
    assert.equal(allStartingWithA(['apple', 'alligator', 'Arkansas']), true);
  });
  it('returns `false` if any words do not start with either "a" or "A"', function(){
    assert.equal(allStartingWithA(['Amy', 'Bob']), false);
  });
  it('returns `true` if array is empty', function(){
    assert.equal(allStartingWithA([]), true);
  });
});
describe('anyStartingWithB(words)', function(){
  it('returns `true` if the array contains any words starting with "b" or "B"', function(){
      assert.equal(anyStartingWithB(['Amy', 'Bob']), true);
  });
  it('returns `false` if the array does not contain any words starting with either "b" or "B"', function(){
    assert.equal(anyStartingWithB(['apple', 'alligator', 'Arkansas']), false);
  });
});
describe('hasAtLeastNVowels(word, n)', function(){
  it('returns `true` if there are at least `n` vowels (a/A, e/E, i/I, o/O, u/U) in `word`', function(){
    assert.equal(hasAtLeastNVowels('egg', 0), true);
    assert.equal(hasAtLeastNVowels('egg', 1), true);
    assert.equal(hasAtLeastNVowels('apple', 0), true);
    assert.equal(hasAtLeastNVowels('apple', 1), true);
    assert.equal(hasAtLeastNVowels('apple', 2), true);
    assert.equal(hasAtLeastNVowels('Orange', 0), true);
    assert.equal(hasAtLeastNVowels('Orange', 1), true);
    assert.equal(hasAtLeastNVowels('Orange', 2), true);
    assert.equal(hasAtLeastNVowels('Orange', 3), true);
    assert.equal(hasAtLeastNVowels('DANGEROUS', 0), true);
    assert.equal(hasAtLeastNVowels('DANGEROUS', 1), true);
    assert.equal(hasAtLeastNVowels('DANGEROUS', 2), true);
    assert.equal(hasAtLeastNVowels('DANGEROUS', 3), true);
    assert.equal(hasAtLeastNVowels('DANGEROUS', 4), true);
    assert.equal(hasAtLeastNVowels('uncopywriteable', 0), true);
    assert.equal(hasAtLeastNVowels('uncopywriteable', 1), true);
    assert.equal(hasAtLeastNVowels('uncopywriteable', 2), true);
    assert.equal(hasAtLeastNVowels('uncopywriteable', 3), true);
    assert.equal(hasAtLeastNVowels('uncopywriteable', 4), true);
    assert.equal(hasAtLeastNVowels('uncopywriteable', 5), true);
    assert.equal(hasAtLeastNVowels('uncopywriteable', 6), true);
  })
  it('returns `false` if there are fewer than `n` vowels in `word`', function(){
    assert.equal(hasAtLeastNVowels('egg', 2), false);
    assert.equal(hasAtLeastNVowels('apple', 3), false);
    assert.equal(hasAtLeastNVowels('dangerous', 5), false);
    assert.equal(hasAtLeastNVowels('uncopywriteable', 7), false);
  });
  it('returns `null` if `n` is less than 0', function(){
    assert.equal(hasAtLeastNVowels('banana', -1), null);
  });
});
describe('wordsWithAtLeastTwoVowels(words)', function(){
  it('returns all words that have at least two vowels', function(){
    assert.deepStrictEqual(
      wordsWithAtLeastTwoVowels(['alphabet', 'bun', 'can', 'doe', 'egg']),
                                  ['alphabet', 'doe']
    );
  });
});
describe('allHaveAtLeastTwoVowels(words)', function(){
  it('returns `true` if all words have at least two vowels', function(){
    assert.equal(allHaveAtLeastTwoVowels(['apple', 'alligator', 'Arkansas']), true);
  });
  it('returns `false` if any words do not have at least two vowels', function(){
    assert.equal(allHaveAtLeastTwoVowels(['Al', 'Barbara']), false);
    assert.equal(allHaveAtLeastTwoVowels(['Al', 'buck', 'can']), false);
  });
  it('returns `true` if array is empty', function(){
    assert.equal(allHaveAtLeastTwoVowels([]), true);
  });
});
describe('anyHaveAtLeastTwoVowels(words)', function(){
  it('returns `true` if the array contains any words with at least two vowels', function(){
    assert.equal(anyHaveAtLeastTwoVowels(['apple', 'alligator', 'Arkansas']), true);
    assert.equal(anyHaveAtLeastTwoVowels(['APPLE', 'bun', 'CAT']), true);
  });
  it('returns `false` if the array does not contain any words with at least two vowels', function(){
    assert.equal(anyHaveAtLeastTwoVowels(['at', 'Bob', 'cup', 'dog']), false);
  });
});
describe('noneHaveTwoOrMoreVowels(words)', function(){
  it('returns `true` if none of the words have at least two vowels', function(){
    assert.equal(noneHaveTwoOrMoreVowels(['Al', 'buck', 'can']), true);
  });
  it('returns `false` if any words do not have at least two vowels', function(){
    assert.equal(noneHaveTwoOrMoreVowels(['Al', 'Barbara']), false);
    assert.equal(noneHaveTwoOrMoreVowels(['apple', 'alligator', 'Arkansas']), false);
  });
  it('returns `true` if array is empty', function(){
    assert.equal(noneHaveTwoOrMoreVowels([]), true);
  });
});
describe('buildObjectFromWords(words)', function(){
  it('takes an array of words and returns an object', function(){
    assert.equal(buildObjectFromWords(['a','b','c']).constructor, ({}).constructor);
  });
  it('adds every word to that object as a key, and sets the value for that key the length of the word', function(){
    assert.deepStrictEqual(buildObjectFromWords(['apple', 'banana', 'cranberry']), {'apple': 5, 'banana': 6, 'cranberry': 9});
  });
});
