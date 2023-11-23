// Your tests here
const { isPalindrome } = require('../utils');

describe('isPalindrome', () => {
  it('returns true for a palindrome word', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  it('returns false for a non-palindrome word', () => {
    expect(isPalindrome('car')).toBe(false);
  });

});