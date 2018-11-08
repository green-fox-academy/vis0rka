'use strict';

const accounts: any[] = [
    { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
    { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
    { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]

// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.

// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]

function getNameAndBalance(accountNumb) {
    let nameAndBalance = [];
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].accountNumber == accountNumb) {
            nameAndBalance.push(accounts[i].clientName, accounts[i].balance);
            return nameAndBalance;
        }
    } return `Log "404 - account not found`;
}
console.log(getNameAndBalance(11234543));

function transferAmount(accounts, accountNumb01, accountNumb02, transferAmount) {
    for (let k = 0; k < accounts.length; k++) {
        if (accounts[k].accountNumber == accountNumb01) {
            accounts[k].balance -= transferAmount;    
            for (let e = 0; e < accounts.length; e++) {
                if(accounts[e].accountNumber == accountNumb02) {
                    accounts[e].accountNumber += transferAmount;
                }
            }        
            console.log(accounts[k].balance);
            return accounts;
        }
    }
}



console.log(transferAmount(accounts, 43546731, 23456311, 500.0));


/* export = {
  getNameAndBalance,
  transferAmount,
  accounts
}; */