// Псевдомасив arguments and Array.from

const fn = function () {
  console.log(arguments);

  // for (const arg of arguments) {
  //   console.log(arg);
  // }

  const args = Array.from(arguments);

  console.log(args);
};

const fn1 = function (...args) {
  console.log(args);
};

const add = function (...args) {
  console.log(args);
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
};

fn(1, 2, 3);
fn(1, 2, 3, 4, 5);
fn(1, 2, 3, 4, 5, 6, 7);
fn1(1, 2, 3);
fn1(1, 2, 3, 4, 5);
fn1(1, 2, 3, 4, 5, 6, 7);
console.log(add(1, 2, 3));
console.log(add(1, 2, 3, 4, 5));
console.log(add(1, 2, 3, 4, 5, 6, 7));
