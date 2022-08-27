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
