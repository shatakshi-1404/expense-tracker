import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import Filter from "./Filter";

function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState("All");

  const addExpense = (expense) => {
    setExpenses([...expenses, { id: Date.now(), ...expense }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const editExpense = (id, updatedExpense) => {
    setExpenses(expenses.map((exp) => (exp.id === id ? { ...exp, ...updatedExpense } : exp)));
  };

  const filteredExpenses =
    filter === "All" ? expenses : expenses.filter((e) => e.category === filter);

  // Calculate totals per category
  const categoryTotals = expenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + Number(e.amount);
    return acc;
  }, {});

  const total = expenses.reduce((acc, e) => acc + Number(e.amount), 0);

  return (
    <div>
      <ExpenseForm addExpense={addExpense} />
      <Filter setFilter={setFilter} />
      <ExpenseList
        expenses={filteredExpenses}
        deleteExpense={deleteExpense}
        editExpense={editExpense}
      />
      <h3>Total Spent: ₹{total}</h3>
      {Object.keys(categoryTotals).length > 0 && (
        <div className="category-summary">
          <h4>Category Summary:</h4>
          {Object.entries(categoryTotals).map(([cat, amt]) => (
            <p key={cat}>
              <span className={`category-badge ${cat.toLowerCase()}`}>{cat}</span> ₹{amt}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExpenseTracker;
