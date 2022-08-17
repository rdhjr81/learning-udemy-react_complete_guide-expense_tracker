import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [displayForm, setDisplayForm] = useState(false);

  const toggleDisplayForm = () => {
    setDisplayForm((prevState) => {
      return !prevState;
    });
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    toggleDisplayForm();
  };

  let newExpenseContent = (
    <button onClick={toggleDisplayForm}>Add New Expense</button>
  );

  if (displayForm) {
    newExpenseContent = (
      <ExpenseForm
        onSaveExpenseData={saveExpenseDataHandler}
        onCancel={toggleDisplayForm}
      />
    );
  }

  return <div className="new-expense">{newExpenseContent}</div>;
};

export default NewExpense;
