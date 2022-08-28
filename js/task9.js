// Працюємо з колекцією карток
// Method splice
const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];

// 1. Видалення по індексу за допомогою методу indexOf
const cardToRemove = 'Карточка-3';
const index = cards.indexOf(cardToRemove);
console.log(cardToRemove);
console.log(index);

cards.splice(index, 1);
console.log(cards);

// 2. Додаємо карточку по індексу
const cardToInsert = 'Карточка-6';
const indexToInsert = 3;

cards.splice(3, 0, cardToInsert);
console.table(cards);

// 3. Оновлення по індексу
const cardToUpdate = 'Карточка-4';
const indexToUpdate = cards.indexOf(cardToUpdate);
console.log(indexToUpdate);

cards.splice(indexToUpdate, 1, 'Карточка-4а');
console.log(cards);
