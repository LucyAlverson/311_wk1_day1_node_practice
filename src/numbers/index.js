const isEven = (num) => {
 if integer % 2 == 0:
        return True
  else:
        return False
}

const sum = (arr) => {
  
  const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

console.log(array1.reduce(reducer));
console.log(array1.reduce(reducer, 5));
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