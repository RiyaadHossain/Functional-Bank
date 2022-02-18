/* =========== Common Function =========== */
function getInteger(input, text){
    let inputResult;
    const getInput = document.getElementById(input);
    if(text){
        inputResult = parseInt(getInput.innerText)
    }else{
        inputResult = parseInt(getInput.value)
    }

    /* Emptify Input */
    getInput.value = ""
    return inputResult;
}

function updateBal(input){
    let balance_Dis = getInteger("balance-display", true)
    let result = balance_Dis + input
    document.getElementById("balance-display").innerText = result;
}

/* =========== Deposit Button =========== */
document.getElementById("deposit-btn").addEventListener("click", () => {
    let deposit_Dis = getInteger("deposit-display", true);
    let deposit_Int = getInteger("deposit-input", false);
    let result = deposit_Dis + deposit_Int

    document.getElementById("deposit-display").innerText = result
    updateBal(result)
})
