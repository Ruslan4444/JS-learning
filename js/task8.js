// Написати скрипт по підрахунку суми двох  масивів
const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

// 1. Записати зиінну, в якій будемо зберігати суму
let total = 0;
// 2. Обєднуємо два масиви
const numbers = array1.concat(array2);
console.log(numbers);

// Цей метод не деструктивний, тобто не змінює вихідні масиви
console.log(array1);
console.log(array2);
// 3. Перебираємо масив та додаємо кожен елемент до суми
for (const number of numbers) {
  total += number;
}
console.log(total);
