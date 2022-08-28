// To write slug
const title = 'Top 10 benefits of React framework';

// 1. Нормалізуємо рядок
const normalizedTitle = title.toLowerCase();
console.log(normalizedTitle);
// 2. Розбиваємо по словах
const words = normalizedTitle.split(' ');
console.log(words);
// 3. Обєднуємо в рядок з роздільним знаком
const slug = words.join('-');
console.log(slug);

// Or to do it in ine line
const slug1 = title.toLowerCase().split(' ').join('-');
console.log(slug1);
