function createAccount(balance) {
  let mony = balance;
  function inner(ammount) {
    mony = mony + ammount;
    return mony;
  }
  return inner;
}

let account = createAccount(1000);

console.log(account()); // 1000
console.log(account(500)); // 1500
console.log(account(200)); // 1700
