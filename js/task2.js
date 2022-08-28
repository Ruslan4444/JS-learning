// To count even numbers - calculateEvenNumbers
const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];

const calculateEvenNumbers = function (items) {
  let total = 0;
  for (const item of items) {
    if (item % 2 === 0) {
      console.log(item);
      total += item;
    }
  }
  return total;
};

const calculateOddNumbers = function (items) {
  let total = 0;
  for (const item of items) {
    if (item % 2 !== 0) {
      console.log(item);
      total += item;
    }
  }
  return total;
};

console.log(calculateEvenNumbers(numbers));
console.log(calculateOddNumbers(numbers));
