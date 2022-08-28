// Написати функцію filterNumbers

const filterNumbers = function (array, ...args) {
  console.log(array);
  console.log(args);
  const uniqueElements = [];

  for (const element of array) {
    console.log(args.includes(element));
    if (args.includes(element)) {
      uniqueElements.push(element);
    }
  }
  return uniqueElements;
};

console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
