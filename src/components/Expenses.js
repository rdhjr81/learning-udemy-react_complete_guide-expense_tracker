import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import "./Card.css";
import "./Expenses.css";
function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenseList.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </Card>
  );
}

export default Expenses;
