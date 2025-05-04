let expenses =[
    {amount: 100, category : "Utilities"},
    {amount: 200, category : "Groceries"},
    {amount: 50, category : "Entertainment"},
];

let totalExpenses = expenses.reduce((acc, expenses) => acc + expenses.amount, 0);

console.log("Total Expenses:" , totalExpenses)