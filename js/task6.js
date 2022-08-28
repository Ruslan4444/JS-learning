// Написати функцію, яка змінює кожен символ рядка, змінивши регістр на протилежний - changeCase

const changeCase = function (string) {
  const letters = string.split('');
  console.log(letters);
  let invertedString = '';

  for (const letter of letters) {
    const isInLowerCase = letter === letter.toLowerCase();

    invertedString += isInLowerCase
      ? letter.toUpperCase()
      : letter.toLowerCase();
  }

  return invertedString;
};

console.log(changeCase('qweRTY'));
console.log(changeCase('MANgo'));
