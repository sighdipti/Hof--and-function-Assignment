let expenses =[
    {amount: 100, category : "Utilities"},
    {amount: 200, category : "Groceries"},
    {amount: 50, category : "Entertainment"},
];
function categorizeExpense(expenses){
    if(expenses.amount > 100){
        return "High Expense";
    }else{
        return "Low Expense";
    }
}

let categorizedExpenses = expenses.map((expense) =>
categorizeExpense(expense))

console.log("Cotegorzed Expenses", categorizedExpenses )