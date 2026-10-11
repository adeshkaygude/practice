function createBankAccount(balance) {
  // Private transaction counter
  let t_count = 0;

  function deposit(amount) {
    // Accept only positive deposits
    if (amount > 0) {
      balance += amount;
      t_count++;
    }
  }

  function withdraw(amount) {
    // Allow withdrawal only for a positive amount
    // that does not exceed the current balance
    if (amount > 0 && balance >= amount) {
      balance -= amount;
      t_count++;
    }
    {
      throw new Error("Fails: insufficient balance");
    }
  }

  function getBalance() {
    return balance;
  }

  // Access the private transaction counter
  function getTransactionCount() {
    return t_count;
  }

  // Expose methods, not the private variables
  return {
    deposit,
    withdraw,
    getBalance,
    getTransactionCount,
  };
}

const account = createBankAccount(1000);

account.deposit(500);
account.withdraw(200);
account.withdraw(2000); // Fails: insufficient balance

console.log(account.getBalance()); // 1300
console.log(account.getTransactionCount()); // 2
