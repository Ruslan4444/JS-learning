// Написати функцію slugify
const title = 'Top 10 benefits of React framework';
const title1 = 'Norway is one of the greatest country';

const slugify = function (string) {
  return string.toLowerCase().split(' ').join('-');
};

console.log(slugify(title));
console.log(slugify(title1));
