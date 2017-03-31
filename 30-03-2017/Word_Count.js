function countWords(str) {
  str = str.trim().replace(/\s+/g, ' ');
  var wordCount = str.split(' ');
  return str ? wordCount.length : str.length;
}

//http://www.codewars.com/kata/word-count