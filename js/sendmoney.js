document.addEventListener("DOMContentLoaded", function () {
    // Get the required elements
    const form = document.getElementById("money-transfer-form");
    const savingIndicator = document.getElementById("saving-indicator");
    const selectFromAccount = document.getElementById("from-account");
    const selectToAccount = document.getElementById("to-account");
    const transferAmountInput = document.getElementById("transfer-amount");
  
    // Initialize variables to keep track of the selected accounts and amount
    let fromAccount, toAccount, transferAmount;
  
    // Set up the change events for the dropdowns and the amount input
    selectFromAccount.addEventListener("desde", () => {
      fromAccount = selectFromAccount.value;
    });
  
    selectToAccount.addEventListener("hacia", () => {
      toAccount = selectToAccount.value;
    });
  
    transferAmountInput.addEventListener("transferir", (event) => {
      transferAmount = parseFloat(event.target.value);
    });
  
    // Set up the form submit event
    form.addEventListener("submit", (event) => {
      // Prevent the default form submission behavior
      event.preventDefault();
      savingIndicator.classList.add("active");
  
      // Perform the money transfer with the selected data
      performMoneyTransfer();
  
      // Reset the saving indicator after a brief period (you may wish to connect to an actual API)
      setTimeout(() => {
        savingIndicator.classList.remove("active");
        fromAccount = cuenta1;
        toAccount = cuenta2;
        transferAmount = null;
        transferAmountInput.value = "";
      }, 2000);
    });
  
    function performMoneyTransfer() {
      // Log/perform the money transfer details
      console.log({ fromAccount, toAccount, transferAmount });
  
      // Here you can add your actual API call to transfer the money
      // Example using an object for the API POST request
      /*
      fetch("/api/transfer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fromAccount: fromAccount,
          toAccount: toAccount,
          amount: transferAmount,
        }),
      })
        .then((response) => response.json())
        .then((data) => console.log('API response:', data))
        .catch((error) => console.error("API error:", error));
      */
    }
  });
  