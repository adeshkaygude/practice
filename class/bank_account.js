class BankAccount {
  constructor(accNo, name, type, balance) {
    this.accNo = accNo;
    this.name = name;
    this.type = type;
    this.balance = balance;
  }

  deposit(ammount) {
    if (ammount > 0) {
      this.balance += ammount;
    }
  }

  debit(ammount) {
    if (ammount > this.balance) throw new Error("low balance");
    if (ammount > 0) {
      this.balance -= ammount;
    }
  }

  checkbalance() {
    return this.balance;
  }

  details() {
    console.log(
      `
      account no : ${this.accNo}
        name : ${this.name}
        type : ${this.type}
        balance : ${this.balance} 

        `,
    );
  }
}

const acc = new BankAccount(11, "adesh", "saving", 1000);
console.log(acc.checkbalance());
acc.deposit(500);
console.log(acc.checkbalance());
acc.debit(400);
console.log(acc.checkbalance());

acc.details();
