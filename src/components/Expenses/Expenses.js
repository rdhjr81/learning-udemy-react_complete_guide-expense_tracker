import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("");

  const yearChangeHandler = (year) => {
    setFilterYear(year.toString());
    console.log("year: " + year);
  };

  return (
    <div>
      <ExpensesFilter onChangeYear={yearChangeHandler} />
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
    </div>
  );
};

export default Expenses;
