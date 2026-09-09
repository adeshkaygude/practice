function Bankaccount(balance) {
  this.balance = balance;

  this.deposit = function (transection) {
    return (this.balance = this.balance + transection);
  };
  this.withdraw = (transection) => {
    if (this.balance >= transection) {
      return (this.balance = this.balance - transection);
    } else {
      return "insufficient balance ";
    }
  };
}

let a = new Bankaccount(10000);
console.log(a.deposit(5000));
console.log(a.withdraw(5000));
console.log(a.withdraw(100000));
console.log(a.deposit(12000));
