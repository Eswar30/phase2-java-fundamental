//global accounts array
let accounts = [
    { accNo:100, Name:"Eswar", balance:45678.60},
    { accNo:101, Name:"Ayya", balance:100000.90},
    { accNo:102, Name:"Mukesh", balance:345678.90},
    { accNo:103, Name:"Sai", balance:345627.90},
    { accNo:104, Name:"Jeevana", balance:3425678.70},

];

//show balance
function showBalance() {
    let accId = prompt("Enter Account Id : ");
    let account = findAccount(accId);
}

//withdraw
function withdraw() {
    let accId = prompt ("Enter Account Id : ");
    let amount = prompt ("Enter Amount to withdraw : ");
    let account = findAccount(accId);
    account.balance = account.balance - Number(amount);
    console.log(`The user, ${accId} ${account.Name} has balance new updated ${account.balance}`);
}

//deposit
function deposit() {
    let accId = prompt ("Enter Account Id : ");
    let amount = prompt ("Enter Amount to deposit : ");
    let account = findAccount(accId);
    account.balance = account.balance + Number(amount);
    console.log(`The user, ${accId} ${account.Name} has balance new updated ${account.balance}`);
}
//find account 

function findAccount(accId) {
    let match=0;
  for (let acc of accounts) {
      if(acc.accNo == accId){
          console.log(`The user, ${accId} ${acc.Name} has balance ${acc.balance}`);
          match++;
          return acc;

      }
  }
  if(match==0){
  console.log("The user does not exist with id",accId);
  }
  return;

}