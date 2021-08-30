const { strings } = require("..")

const split = (str, delim) => {
  // write code for strings.split
  // Split a string on the given delimeter
  return str.split(delim);
  }

const pairs = (str) => {
  // write code for strings.pairs
  // Break a string into pairs
  let pairOfStrings = [];
  for (let i = 0; i < str.length; i += 2) {
    pairOfStrings.push(str.slice(i, i +2));
  }
  return pairOfStrings; 
}

const reverse = (str) => {
  // write code for strings.reverse
  let splitString = str.split("");
  let reverseString = splitString.reverse();
  let joinString = reverseString.join("");
  return joinString;
}

  reverse('a blue dog');

module.exports = {
  split,
  pairs,
  reverse
}