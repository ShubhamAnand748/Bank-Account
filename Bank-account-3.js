var accounts = [];

function createAccount(account){
    accounts.push(account);
    return account;
}

function getAccount(userName){
    var matchedAccount;

    for(var i = 0; i <accounts.length; i++) {
        if (accounts[i].userName === userName) {
            matchedAccount = accounts[i];
        }
    }
    return matchedAccount;
}

function deposit(account, amount) {
    if (typeof amount === 'number') {
        account.balance += amount;
    } else {
        console.log('deposit failed. amount is not a number')
    }
}

function withdraw(account, amount) {
    if (typeof amount === 'number') {
    account.balance -= amount; 
    } else {
        console.log('withdraw failed. amount is not a number')
    }
}

function getBalance(account) {
    return account.balance;
}

function createbalanceGetter(account) {
    return function() {
        return account.balance;
    }
}

var shubhamAccount = createAccount({
    userName: 'Shubham',
    balance: 0
});

deposit(shubhamAccount, 1000);
withdraw(shubhamAccount, 'Six hundred');

var shubhamAccount2 = getAccount('Shubham');
var getShubhamAccount2Balance = createbalanceGetter(shubhamAccount2);

console.log(getShubhamAccount2Balance());