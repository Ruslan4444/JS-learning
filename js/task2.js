// To count even numbers
const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];

// 1. To create variable
let total = 0;
// 2. Перебрати масив
for (let i = 0; i < numbers.length; i += 1) {
  // 3. Провірити на парність
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
    // 4. Якщо парне число, додати до суми
    // total += numbers[i];
  }
}

// for (const number of numbers) {
//   if (number % 2 === 0) {
//     total += number;
//   }
// }
// Логіка від зворотнього!!!!
for (const number of numbers) {
  if (number % 2 !== 0) {
    continue;
  }
  total += number;
}

console.log(total);
