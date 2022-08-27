// Порахувати загальну суму купівель в корзині

const cart = [54, 28, 105, 70, 92, 17, 120];

// 1. Створити змінну для зберігання загальної суми
let total = 0;
// 2. Перебрати масив
// 3. Добавити до змінної загальної суми кожен елемент масиву

// Method for..
// for (let i = 0; i < cart.length; i += 1) {
//   total += cart[i];
// }

// Method for...of
for (const value of cart) {
  total += value;
}
console.log('Total: ', total);

// To add taxes to each element in Array should use for, not for..of(will not change elements in array)
for (let i = 0; i < cart.length; i += 1) {
  cart[i] = Math.round(cart[i] * 1.25);
}
console.log(cart);
