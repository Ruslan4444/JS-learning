// Методи масиву
// Методи split() і join()

// Метод split(delimiter) перетворює рядок в масив, «розбиваючи» його роздільником delimiter. Якщо роздільник - це порожній рядок, то створиться масив окремих символів. Роздільником може бути один або декілька символів.
const name = 'Mango';
console.log(name.split('')); // ["M", "a", "n", "g", "o"]

const message = 'JavaScript - це цікаво';
console.log(message.split(' ')); //['JavaScript', '-', 'це', 'цікаво'];

// Метод масивів join(delimiter) об'єднує елементи масиву у рядок. У рядку елементи будуть розділені символом або групою символів, зазначених в delimiter. Тобто ця операція протилежна методу рядків split(delimiter).
const words = ['JavaScript', 'це', 'цікаво'];
console.log(words.join('')); //JavaScriptцецікаво
console.log(words.join(' ')); //JavaScript це цікаво
console.log(words.join('-')); //JavaScript-це-цікаво

// Метод indexOf()
// indexOf(value) повертає перший індекс, в якому елемент зі значенням value був знайдений в масиві, або число -1, якщо такий елемент відсутній. Використовуйте indexOf тоді, коли необхідно отримати сам індекс елемента.
const clients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
console.log(clients.indexOf('Poly')); //2
console.log(clients.indexOf('Mango')); //0
console.log(clients.indexOf('Kiwi')); //3
console.log(clients.indexOf('Don')); //-1

// Метод includes()
// includes(value) перевіряє, чи містить масив елемент зі значенням value і повертає true або false відповідно. Застосування цього методу корисне в ситуаціях, коли необхідно перевірити, чи є елемент в масиві і не важлива його позиція (індекс).
const items = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
console.log(items.includes('Kiwi')); //true
console.log(items.includes('Poly')); //true
console.log(items.includes('Don')); //false

// Перевірка багатьох умов з includes()
const fruit = 'apple';
if (fruit === 'apple' || fruit === 'strawberry') {
  console.log('It is red fruit!');
}

const redFruits = ['apple', 'strawberry', 'cherry', 'cranberries'];
const fruitR = 'cherry';
// Перевіряємо присутність елемента
const hasFruit = redFruits.includes(fruitR);
if (hasFruit) {
  console.log(`${fruitR} is a red fruit!`);
}

// Методи push() і pop()
// Метод push() додає один або декілька елементів наприкінці масиву, без необхідності зазначати індекси елементів, що додаються. Повертає довжину масиву після додавання елементів.
const numbers = [];
numbers.push(1);
console.log(numbers);
numbers.push(2);
console.log(numbers);
numbers.push(3);
console.log(numbers);

// Метод pop() видаляє останній елемент з кінця масиву і повертає видалений елемент. Якщо масив порожній, метод повертає undefined.
console.log(numbers.pop()); //3
console.log(numbers); //[1, 2]
console.log(numbers.pop()); //2
console.log(numbers); //[1]

// Метод slice()
// slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його. Копія створюється з begin і до, але не включно, end - індекси елементів вихідного масиву.
const customers = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
console.log(customers.slice(0, 2)); // ['Mango', 'Ajax']
console.log(customers.slice(1, 3)); //['Ajax', 'Poly']
// Якщо не зазначено end, копіювання буде зі start і до кінця вихідного масиву.
console.log(customers.slice(3)); //['Kiwi']
// Якщо begin і end не зазначені, буде створена повна копія вихідного масиву.
console.log(customers.slice()); // ['Mango', 'Ajax', 'Poly', 'Kiwi']
// Якщо значення start від'ємне, а end не зазначено - будуть скопійовані останні start елементи
console.log(customers.slice(-2)); //['Poly', 'Kiwi']

// Метод splice()
// Швейцарський ніж для роботи з масивами, якщо вихідний масив необхідно змінити. Видаляє, додає і замінює елементи у довільному місці масиву.

// Видалення
// Щоб видалити елементи в масиві, передаються два аргументи.
// splice(position, num)
// position - вказує на позицію (індекс) першого елемента для видалення
// num - визначає кількість елементів, що видаляються
const scores = [1, 2, 3, 4, 5];
// Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
const deletedScores = scores.splice(0, 3);
console.log(deletedScores); // [1, 2, 3]
console.log(scores); // [4, 5]

// Додавання
// Для того, щоб додати один або декілька елементів в масив, необхідно передати три або більше аргументи, за такої умови, другий аргумент повинен дорівнювати нулю.
// splice(position, 0, new_element_1, new_element_2, ...)
// Аргумент position вказує початкову позицію в масиві, куди будуть вставлені нові елементи.
// Другий аргумент - це нуль, він говорить методу не видаляти елементи в місці додавання нових.
// Третій, четвертий і всі наступні аргументи - це нові елементи, які додаються в масив.
const colors = ['red', 'green', 'blue'];
colors.splice(2, 0, 'purple');
console.log(colors); // ["red", "green", "purple", "blue"]
colors.splice(1, 0, 'yellow', 'pink');
console.log(colors); // ['red', 'yellow', 'pink', 'green', 'purple', 'blue']

// Заміна
// Заміна - це операція додавання, в якій видаляються елементи в місці додавання нових. Для цього необхідно передати мінімум три аргументи. Кількість елементів, що видаляються і додаються, може не збігатися.
// splice(position, num, new_element_1, new_element_2, ...)
// position - вказує на позицію (індекс) першого елемента для видалення
// num - визначає кількість елементів, що видаляються
// Третій, четвертий і всі наступні аргументи - це нові елементи, які додаються в масив.
const languages = ['C', 'C++', 'Java', 'JavaScript'];
languages.splice(1, 1, 'Python');
console.log(languages); //['C', 'Python', 'Java', 'JavaScript']

// Метод concat()
// Об'єднує два або більше масивів в один. Він не змінює масив, на якому викликається, а повертає новий. Порядок аргументів методу впливає на порядок елементів нового масиву.
const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Monkong', 'Singu'];
const allClientsOldFirst = oldClients.concat(newClients);
console.log(allClientsOldFirst); //['Mango', 'Ajax', 'Poly', 'Kiwi', 'Monkong', 'Singu']
const allClientsNewFirst = newClients.concat(oldClients);
console.log(allClientsNewFirst); //['Monkong', 'Singu', 'Mango', 'Ajax', 'Poly', 'Kiwi']

console.log(oldClients); //['Mango', 'Ajax', 'Poly', 'Kiwi']
console.log(newClients); //['Monkong', 'Singu']
