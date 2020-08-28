// login button even handler
const loginBtn = document.getElementById("login-btn");
loginBtn.addEventListener("click", function () {
    const loginArea = (document.getElementById("login-area").style.display =
        "none");
    const transactionArea = (document.getElementById(
        "transaction-area"
    ).style.display = "block");

    // back click handle
    const backToHome = document.getElementById("back");
    backToHome.addEventListener("click", function () {
        const loginArea = (document.getElementById(
            "login-area"
        ).style.display = "block");
        const transactionArea = (document.getElementById(
            "transaction-area"
        ).style.display = "none");
    });
});

// deposit button event handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener("click", function () {
    const depositNumber = getInputNumber('depositAmount');

    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);
    document.getElementById('depositAmount').value = "";
});
// withdraw button even handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener("click", function () {
    const withdrawNumber = getInputNumber('withdrawAmount');
    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1 * withdrawNumber);


    document.getElementById('withdrawAmount').value = "";
});

function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}