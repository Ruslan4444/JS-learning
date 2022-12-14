// Arrays
// Літерал масиву - [], розділяється комою!

const clients = ['Mango', 'Poly', 'Ajax'];

// Доступ до елемента масиву - масив[індекс]

console.log(clients[0]); //Mango
console.log(clients[1]); //Poly
console.log(clients[2]); //Ajax
console.log(clients[3]); //undefined

// Eлементи масиву можна змінювати, звернувшись до них за індексом і присвоївши інше значення.
clients[0] = 'Kiwi';
clients[1] = 'Pango';
console.log(clients); //['Kiwi', 'Pango', 'Ajax']

// Довжина масиву, тобто кількість його елементів, зберігається у властивості length
console.log(clients.length); //3

// Використовуючи формулу (довжина_масиву - 1), можна отримати значення останнього елемента масиву довільної довжини
const lastElementIndex = clients.length - 1;
console.log(lastElementIndex); //2
console.log(clients[lastElementIndex]); //Ajax

// Ітерація по масиву
// Цикл for можна використовувати для ітерації по масиву, тобто «перебрати» його поелементно
const items = ['Mango', 'Ajax', 'Poly'];
for (let i = 0; i < items.length; i += 1) {
  console.log(items[i]);
}
// Для доступу до елементів використовується синтаксис квадратних дужок масив[індекс], де індекс - це значення лічильника

// Цикл for...of
// Це хороша заміна циклу for, якщо не потрібен доступ до лічильника ітерації
for (const item of items) {
  console.log(item);
}
const string = 'javascript';
for (const character of string) {
  console.log(character);
}

// Оператори break і continue
const customers = ['Mango', 'Poly', 'Ajax'];
const customerNameToFind = 'Poly';
let message;

for (const customer of customers) {
  if (customer === customerNameToFind) {
    message = 'Клієнт з таким імям є в базі даних';
    break;
  }
  message = 'Клієнт з таким імям відсутній в базі даних';
}
console.log(message);

// Можна на початку задати message значення невдачі пошуку, а в циклі перезаписати його на успіх, якщо знайшли ім'я. Але break все одно нам знадобиться, оскільки, якщо у нас масив із 10000 клієнтів, а потрібний нам знаходиться на 2 позиції
const names = ['Mango', 'Poly', 'Ajax'];
const nameToFind = 'Ajax';
let sms = 'Клієнт з таким імям відсутній в базі даних';

for (const name of names) {
  if (name === nameToFind) {
    sms = 'Клієнт з таким імям є в базі даних';
    break;
  }
}
console.log(sms);

// Використовуємо цикл для виведення тільки чисел, більших за певне значення.
const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
const threshold = 15;

for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < threshold) {
    continue;
  }
  console.log(`Число більше за ${threshold}: ${numbers[i]}`);
}
for (const number of numbers) {
  if (number < threshold) {
    continue;
  }
  console.log(`Число більше за ${threshold}: ${number}`);
}

// Присвоєння за посиланням і за значенням
// Примітиви: рядки, числа, булі, null і undefined, під час присвоєння повністю копіюються за значенням (by value).
// У змінній, якій присвоєно масив або об'єкт, зберігається не саме значення, а адреса його місця в пам'яті, іншими словами - посилання (вказівник) на нього і вони передаються за посиланням (by reference).
let a = 5;
let b = a;
console.log(a);
console.log(b);
// Змінимо значення a
a = 10;
console.log(a);
// Значення b не змінилося, оскільки це окрема копія
console.log(b);

// Складні типи - об'єкти, масиви, функції присвоюються за посиланням, тобто змінна просто отримує посилання на вже існуючий об'єкт.
const c = ['Mango'];
const d = c;
console.log(c);
console.log(d);
// Змінимо масив, додавши ще один елемент, використовуючи вказівник з c;
c.push('Poly');
console.log(c);
// d також змінилось, тому що d, як і c, просто містить посилання на те ж саме місце в пам'яті
console.log(d);
d.push('Ajax');
// Результат повторюється
console.log(c);
console.log(d);
