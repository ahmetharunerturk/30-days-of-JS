function personAccount(ad, soyad, gelir, gider) {
    let totalIncome = gelir;
    let totalExpense = gider;

    function accountInfo() {
        return `Ad: ${ad}, Soyad: ${soyad}, Gelir: ${gelir}, Gider: ${gider}`;
    }

    function addIncome(amount) {
        totalIncome += amount;
    }

    function addExpense(amount) {
        totalExpense += amount;
    }

    function accountBalance() {
        return totalIncome - totalExpense;
    }

    return {
        accountInfo,
        addIncome,
        addExpense,
        accountBalance
    };
}
const account = personAccount("John", "Doe", 5000, 2000);
console.log(account.accountInfo());
account.addIncome(1000);
account.addExpense(500);
console.log(account.accountBalance());
