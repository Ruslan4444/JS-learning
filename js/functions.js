// 1. Оголошення функції multiply
function multiply() {
  // Тіло функції
  console.log('Це лог на момент виклику функції multiply');
}

// 2. Виклики функції multiply
multiply(); // 'Це лог на момент виклику функції multiply'
multiply(); // 'Це лог на момент виклику функції multiply'

// / 1. Оголошення параметрів x, y, z
function multiply1(x, y, z) {
  console.log(`Результат множення дорівнює ${x * y * z}`);
}

// 2. Передача аргументів
multiply1(2, 3, 5); // Результат множення дорівнює 30

function multiply2(x, y, z) {
  console.log('Код до return виконується звичайним чином');

  // Повертаємо результат виразу множення
  return x * y * z;

  console.log('Цей лог ніколи не виконається, він стоїть після return');
}

// Результат роботи функції можна зберегти у змінну
let result = multiply2(2, 3, 5);
console.log(result); // 30

function multiply3(x, y, z) {
  console.log(`Результат множення дорівнює ${x * y * z}`);
}

console.log('Лог до виклику функції multiply');
multiply3(2, 3, 5); // Результат множення дорівнює 30
console.log('Лог після виклику функції multiply');

// Послідовність логів в консолі
// "Лог до виклику функції multiply"
// "Результат множення дорівнює 30"
// "Лог після виклику функції multiply"

function count(countFrom = 0, countTo = 10, step = 1) {
  console.log(`countFrom = ${countFrom}, countTo = ${countTo}, step = ${step}`);

  for (let i = countFrom; i <= countTo; i += step) {
    console.log(i);
  }
}

count(1, 5); // countFrom = 1, countTo = 5, step = 1
count(2); // countFrom = 2, countTo = 10, step = 1
count(); // countFrom = 0, countTo = 10, step = 1

function multiply4() {
  let total = 1;

  for (const argument of arguments) {
    total *= argument;
  }

  return total;
}

console.log(multiply4(1, 2, 3)); //  6
console.log(multiply4(1, 2, 3, 4)); //  24
console.log(multiply4(1, 2, 3, 4, 5)); //  120

// Перетворення псевдомасиву
// Використовуючи метод Array.from(), який створить масив із псевдомасиву.
function fn() {
  // Змінна args буде містити повноцінний масив
  const args = Array.from(arguments);
}

// Використовуючи операцію ... (rest), вона дозволяє зібрати будь-яку кількість елементів, у нашому випадку аргументів, в масив, і зберегти його в змінну. Збираємо всі аргументи, використовуючи операцію rest безпосередньо в підписі функції.
function fn1(...args) {
  // Змінна args буде містити повноцінний масив
}

// Патерн «Раннє повернення»
// Створимо функцію, яка обробляє зняття коштів з особистого рахунку в банку. Вона отримує суму для зняття і поточний баланс рахунку, після чого, залежно від умови, виконує необхідний блок коду.

function withdraw(amount, balance) {
  if (amount === 0) {
    console.log('Для проведення операції введіть суму більшу за нуль');
  } else if (amount > balance) {
    console.log('Недостатньо коштів на рахунку');
  } else {
    console.log('Операція зняття коштів проведена успішно');
  }
}

withdraw(0, 300); // "Для проведення операції введіть суму більшу за нуль"
withdraw(500, 300); // "Недостатньо коштів на рахунку"
withdraw(100, 300); // "Операція зняття коштів проведена успішно"

// У функції може бути більше одного оператора return. Головне пам'ятати, що виконання функції переривається, коли інтерпретатор зустрічає повернення, і увесь код після нього буде проігнорований в поточному виконанні функції.
// Якщо умова виконується, викликається console.log
// і вихід із функції. Код після тіла if не виконається.
function withdraw1(amount, balance) {
  if (amount === 0) {
    console.log('Для проведення операції введіть суму більшу за нуль');
    return;
  }

  // Якщо умова першого if не виконалась, його тіло пропускається
  // та інтерпретатор доходе до другого if.
  // Якщо умова виконується, викликається console.log і вихід із функції.
  // Код, що знаходиться після тіла if, не виконається.
  if (amount > balance) {
    console.log('Недостатньо коштів на рахунку');
    return;
  }

  // Якщо жоден із попередніх if не виконався,
  // інтерпретатор доходить до цього коду і виконує його.
  console.log('Операція зняття коштів проведена');
}

withdraw1(500, 300); // "Недостатньо коштів на рахунку"
withdraw1(100, 300); // "Операція зняття коштів проведена"
withdraw1(0, 300); // "Для проведення операції введіть суму більшу за нуль"

// Функціональний вираз
// Функціональний вираз (function expression) - звичайне оголошення змінної, значенням якої буде функція. Альтернативний спосіб оголошення функції.
// Оголошення функції (function declaration)
function multiply5(x, y, z) {
  console.log(`Результат множення дорівнює ${x * y * z}`);
}

// Функціональний вираз (function expression)
const multiply6 = function (x, y, z) {
  console.log(`Результат множення дорівнює ${x * y * z}`);
};