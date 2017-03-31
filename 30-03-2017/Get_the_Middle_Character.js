function getMiddle(s)
{
  var midLength = Math.floor(s.length / 2);
  if ( s.length % 2 ) {
    return s.charAt(midLength);
  } else {
    return s.substr(midLength - 1, 2);
  }
}


//http://www.codewars.com/kata/get-the-middle-character/train/javascript