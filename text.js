function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    
    const rates = {
    "USD": 1,
    "IND":82.9,
    "EUR": 0.91,
    "GBP": 0.81
    };
    
    const convertedAmount = amount * rates[to] / rates[from];
    
    document.getElementById("convertedAmount").textContent = convertedAmount.toFixed(2);
}