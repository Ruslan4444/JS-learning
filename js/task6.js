// Написати скріпт, який змінює регістр кожного символу
const string = 'JavaScript';
let letters = string.split('');
let invertedString = '';

console.log(letters);

for (const letter of letters) {
  // old method
  //   if (letter === letter.toLowerCase()) {
  //     console.log(letter);
  //     invertedString += letter.toUpperCase();
  //   } else {
  //     invertedString += letter.toLowerCase();
  //   }

  // better solution
  const lowReg = letter === letter.toLowerCase();
  invertedString += lowReg ? letter.toUpperCase() : letter.toLowerCase();
}
console.log(invertedString);
