function isPalindrome(word) {
    const lowerCaseWord = word.toLowerCase();
    const reversedWord = lowerCaseWord.split('').reverse().join('');
    return lowerCaseWord === reversedWord;
  }
  
  module.exports = { isPalindrome };