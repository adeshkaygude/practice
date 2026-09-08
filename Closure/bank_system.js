function createAccount(balance) {
  function deposit(tran) {
    return (balance = balance + tran);
  }
  function withdraw(tran) {
    return (balance = balance - tran);
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

let bal = createAccount(5000);

console.log(bal.deposit(1000));
console.log(bal.withdraw(2000));
console.log(bal.getbalance());
