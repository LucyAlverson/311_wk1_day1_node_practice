const split = (str, delim) => {
  // write code for strings.split

  const str = 'Portland is so rainy you better buy an umbrella.';

const words = strings.split(' ');
console.log(words[3]);
// expected output: "rainy"

const chars = str.split('');
console.log(chars[1]);
// expected output: "s"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["Portland is so rainy you better buy an umbrella."]


}

const pairs = (str) => {
  // write code for strings.pairs

  string = 'abcdefghij'
n = 2	# every 2 characters
split_string = [string[i:i+n] for i in range(0, len(string), n)]
# split_string = ['ab', 'cd', 'ef', 'gh', 'ij']

}

const reverse = (str) => {
  // write code for strings.reverse

}

module.exports = {
  split,
  pairs,
  reverse
}