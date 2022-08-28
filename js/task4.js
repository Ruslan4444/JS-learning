// Написати функцію findLogin(allLogins, login)
const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3m4n'];
const loginToFind = 'poly1scute';

const findLogin = function (allLogins, loginToFind) {
  console.log(allLogins);
  console.log(loginToFind);

  return allLogins.includes(loginToFind)
    ? `User ${loginToFind} found`
    : `User ${loginToFind} not found`;
};

findLogin(logins);

console.log(findLogin(logins, 'm4ngoDoge'));
console.log(findLogin(logins, 'kiwidasb3st'));
console.log(findLogin(logins, 'poly1scute'));
console.log(findLogin(logins, 'm4ngoDossge'));
