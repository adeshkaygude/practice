function BankAccount(name, balance) {
  this.name = name;
  this.balance = balance;

  this.deposit = function (amount) {
    if (amount <= 0) {
      throw new Error("Amount must be positive");
    }

    this.balance += amount;
  };

  this.withdraw = function (amount) {
    if (amount <= 0) {
      throw new Error("Amount must be positive");
    }

    if (this.balance >= amount) {
      this.balance -= amount;
    } else {
      throw new Error("Insufficient balance");
    }
  };

  this.checkBalance = function () {
    console.log("Account holder name:", this.name);
    console.log("Current balance:", this.balance);
  };
}

const account1 = new BankAccount("Adesh", 5000);

account1.deposit(1000);
account1.withdraw(2000);
account1.checkBalance();
