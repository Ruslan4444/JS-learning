// To find login

const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'poly1scute';
// let message = '';

// Method for
// for (let i = 0; i < logins.length; i += 1) {
//   const login = logins[i];
//   //   if (login !== loginToFind) {
//   //     message = `User ${loginToFind} not found`;
//   //   }
//   //   message = `User ${loginToFind} found`;
//   if (login === loginToFind) {
//     message = `User ${loginToFind} found`;
//     break;
//   }
//   message = `User ${loginToFind} not found`;
// }

const message = logins.includes(loginToFind)
  ? `User ${loginToFind} found`
  : `User ${loginToFind} not found`;

console.log(message);
