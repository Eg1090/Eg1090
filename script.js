
let income = 0;
let expenses = 0;
let transactions = [];

function recordTransaction() {
    const amount = parseFloat(document.getElementById("amount").value);
    const category = document.getElementById("category").value;

    if (isNaN(amount) || category.trim() === "") {
        alert("Please enter valid amount and category.");
        return;
    }

    const transaction = { amount, category };
    transactions.push(transaction);

    if (amount > 0) {
        income += amount;
    } else {
        expenses += amount;
    }

    document.getElementById("amount").value = "";
    document.getElementById("category").value = "";

    alert("Transaction recorded successfully!");
}

function generateReport() {
    const netProfit = income + expenses;
    const report = `Income: ${income}\nExpenses: ${expenses}\nNet Profit: ${netProfit}`;

    document.getElementById("report").innerText = report;
}
