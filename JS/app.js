// ***************** Get All Variables *****************
const deposit_Display = document.getElementById("deposit-display");
const deposit_Input = document.getElementById("deposit-input");
const withdraw_Display = document.getElementById("withdraw-display");
const withdraw_Input = document.getElementById("withdraw-input");
const balance_Display = document.getElementById("balance-display");

// ***************** General Function *****************
// Add Sub-Dispaly : Deposit Display & Withdraw Display
function sub_Display(display, input) {
  return (display.innerText =
    parseFloat(display.innerText) + parseFloat(input.value));
}

// Add Total Balance
function add_Balance(sub_Dis, isPositive) {
  if (isPositive == true) {
    balance_Display.innerText =
      parseFloat(sub_Dis.value) + parseFloat(balance_Display.innerText);
  } else {
    balance_Display.innerText =
      parseFloat(balance_Display.innerText) - parseFloat(sub_Dis.value);
  }

  // return balance_Display.innerText;
}

// ***************** Event Handler *****************

// >>>>>>>> Deposit Button <<<<<<<<<
document.getElementById("deposit-btn").addEventListener("click", () => {
  if (parseFloat(deposit_Input.value) > 0) {
    // Add --- Deposit Display
    const display_sub = sub_Display(deposit_Display, deposit_Input);

    // Add --- Balance Display
    add_Balance(deposit_Input, true);
  } else {
    alert("Please Input a valid Amount. Thank You :)");
  }
  // Empty Input
  deposit_Input.value = "";
});

// >>>>>>>> Withdraw Button <<<<<<<<<
document.getElementById("withdraw-btn").addEventListener("click", () => {
  if (parseFloat(withdraw_Input.value) > 0 && parseFloat(withdraw_Input.value) < parseFloat(balance_Display.innerText)) {
    // Add --- Withdraw Display
    const display_sub = sub_Display(withdraw_Display, withdraw_Input);

    // Add --- Balance Display
    add_Balance(withdraw_Input, false);
  } else {
    alert("Please Input a valid Amount. Thank You :)");
  }

  // Empty Input
  withdraw_Input.value = "";
});
