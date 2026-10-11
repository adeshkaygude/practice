function createBankAccount(balance) {
  function deposit(ammount) {
    return (balance += ammount);
  }
  function withdraw(ammount) {
    return (balance -= ammount);
  }
  function get_balance() {
    return balance;
  }
  return { deposit, withdraw, get_balance };
}
const account = createBankAccount(1000);
account.deposit(500);
console.log(account.get_balance());
account.withdraw(200);
console.log(account.get_balance());
