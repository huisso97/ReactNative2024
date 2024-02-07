import { useEffect, useState } from "react";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import useExpenses from "../store/expenses";
import { getDateMinusDays } from "../util/date";
import { fetchExpense } from "../util/http";

const RecentExpenses = () => {
  const { expenses, setExpense } = useExpenses();

  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  useEffect(() => {
    const getExpenses = async () => {
      const expenses = await fetchExpense();
      console.log(expenses);
      setExpense(expenses);
    };

    getExpenses();
  }, []);

  return (
    <ExpensesOutput
      expensesPeriod="Last 7 Days"
      expenses={recentExpenses}
      fallbackText="No expenses registered for the last 7 days."
    />
  );
};

export default RecentExpenses;
