

const isEven = (num) => {
 if (num % 2 === 0: ) {
        return True
 } else {
        return False;
 }
}


const sum = (arr) => {
  // write code for sum
  // given an array of numbers, return the total sum of array
const reduceFunction = (accumulator, currentValue) => accumulator + currentValue;
return arr.reduce(reduceFunction);
}

const comboSum = (arr, sum) => {
bool comboSum(const int a[], int size, int target, int count = 0)
{
    if (target == 0 && size == 0 && count == 0)
        return false;
    else if (target == 0)
       return true;
    else if (target != 0 && size == 0)
       return false;

size--;

return (comboSum(a, size, target) || comboSum(a, size, target - a[size]));
};

}

module.exports = {
  isEven,
  sum,
  comboSum
}