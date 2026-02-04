import React, { useState } from "react";

function ExpenseList({ expenses, deleteExpense, editExpense }) {
  const [editingId, setEditingId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedAmount, setEditedAmount] = useState("");

  const startEdit = (expense) => {
    setEditingId(expense.id);
    setEditedTitle(expense.title);
    setEditedAmount(expense.amount);
  };

  const saveEdit = (id) => {
    editExpense(id, { title: editedTitle, amount: editedAmount });
    setEditingId(null);
  };

  return (
    <div>
      {expenses.map((expense) => (
        <div key={expense.id} className="expense-item">
          {editingId === expense.id ? (
            <>
              <input
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
              />
              <input
                type="number"
                value={editedAmount}
                onChange={(e) => setEditedAmount(e.target.value)}
              />
              <button onClick={() => saveEdit(expense.id)}>Save</button>
            </>
          ) : (
            <>
              <div>
                <strong>{expense.title}</strong> - ₹{expense.amount}{" "}
                <span className={`category-badge ${expense.category.toLowerCase()}`}>
                  {expense.category}
                </span>
              </div>
              <div>
                <button onClick={() => startEdit(expense)}>Edit</button>
                <button onClick={() => deleteExpense(expense.id)}>Delete</button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default ExpenseList;
