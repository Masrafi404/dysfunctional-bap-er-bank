// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {
  /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
  const newDepositAmount = document.getElementById("deposit-field").value;
  /* 
    1. get previous deposit total by id

    */
  const previousDepositTotal = getTextElementValueById("deposit-total");
  console.log(parseFloat(previousDepositTotal));

  // calculate new deposit total
  const newDepositTotal = previousDepositTotal + parseFloat(newDepositAmount);
  console.log(newDepositTotal, previousDepositTotal, parseFloat(newDepositAmount));
  // previousDepositTotal.innerText = newDepositAmount + previousDepositTotal;
  console.log(previousDepositTotal);
  // set deposit total value
  setTextElementValueById("deposit-total", newDepositTotal);

  // get previous balance by using the function
  const previousBalanceTotal = 
  getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal + parseFloat(newDepositAmount);
  setTextElementValueById("balance-total", newBalanceTotal);
});

