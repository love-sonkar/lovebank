class BankAccount {
  accountNumber;
  customername;
  fathersname;
  address;
  balance;
  gender;

  constructor(
    customername,
    fathersname,
    address,
    balance = 0,
    gender = "Male"
  ) {
    this.customername = customername;
    this.fathersname = fathersname;
    this.address = address;
    this.gender = gender;
    this.balance = balance;
    this.accountNumber = Date.now();
  }

  deposit(amount) {
    this.balance += amount;
  }
  withdraw(amount) {
    this.balance -= amount;
  }
}
