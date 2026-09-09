function createAccount(balance) {
  function deposit(ammount) {
    return (balance = balance + ammount);
  }
  function withdraw(ammount) {
    return (balance = balance - ammount);
  }
  function getbalance() {
    return balance;
  }
  return {
    deposit,
    withdraw,
    getbalance,
  };
}
let account = createAccount(10000);

console.log(account.deposit(2000));
console.log(account.withdraw(3000));
console.log(account.getbalance());
