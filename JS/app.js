/* =========== Common Function =========== */
function getInteger(input, text) {
  let inputResult;
  const getInput = document.getElementById(input);
  if (text) {
    inputResult = parseInt(getInput.innerText);
  } else {
    inputResult = parseInt(getInput.value);
  }

  /* Emptify Input */
  getInput.value = "";
  return inputResult;
}

function updateBal(input, plus) {
  let result;
  let balance_Dis = getInteger("balance-display", true);
  if (plus) {
    result = balance_Dis + input;
  } else {
    result = balance_Dis - input;
  }
  document.getElementById("balance-display").innerText = result;
}

/* =========== Deposit Button =========== */
document.getElementById("deposit-btn").addEventListener("click", () => {
  let deposit_Dis = getInteger("deposit-display", true);
  let deposit_Int = getInteger("deposit-input", false);
  let result = deposit_Dis + deposit_Int;

  document.getElementById("deposit-display").innerText = result;
  updateBal(deposit_Int, true);
});

/* =========== Withdraw Button =========== */
document.getElementById("withdraw-btn").addEventListener("click", () => {
  let withdraw_Dis = getInteger("withdraw-display", true);
  let withdraw_Int = getInteger("withdraw-input", false);
  let result = withdraw_Dis + withdraw_Int;

  document.getElementById("withdraw-display").innerText = result;
  updateBal(withdraw_Int, false);
});
