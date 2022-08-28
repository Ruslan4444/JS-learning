// Написати функцію по пошуку найменшого числа в масиві - findSmallestNumber

const findSmallestNumber = function (numbers) {
  let smallestNumber = numbers[0];

  for (const number of numbers) {
    if (number < smallestNumber) {
      smallestNumber = number;
    }
  }

  return smallestNumber;
};

console.log(findSmallestNumber([3, 8, 12, -2, 15])); //-2
console.log(findSmallestNumber([100, 54, 8, 12, 47])); //8
console.log(findSmallestNumber([7, 21, 84, 15, 4])); //4
