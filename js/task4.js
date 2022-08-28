// To find the smallest number, write script if numbers are unique
const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbers[0];
console.log(smallestNumber);

for (const number of numbers) {
  console.log(number);

  if (number < smallestNumber) {
    smallestNumber = number;
  }
}
console.log(smallestNumber);
