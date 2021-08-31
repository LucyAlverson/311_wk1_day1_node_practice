

const isEven = (num) => {
 if (num % 2 === 0 ) {
        return true
 } else {
        return false;
 }
}


const sum = (arr) => {
  // write code for sum
  // given an array of numbers, return the total sum of array
const reduceFunction = (accumulator, currentValue) => accumulator + currentValue;
return arr.reduce(reduceFunction);
}

const comboSum = (arr, sum) => {
       for(let x in arr){
         for(let y in arr){
           
           if (arr[x] + arr[y] === sum){
             return true
             } else {return false}
           
         }
       } }

module.exports = {
  isEven,
  sum,
  comboSum
}