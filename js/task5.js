// To write script, to combine elements of array in a string
const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// old method
// let string = '';

// for (const friend of friends) {
//   string += friend + ',';
// }
// console.log(string);
// console.log(string.slice(0, string.length - 1));

// New method
const string = friends.join(', ');
console.log(string);
