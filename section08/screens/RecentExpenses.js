import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import useExpenses from "../store/expenses";
import { getDateMinusDays } from "../util/date";

const RecentExpenses = () => {
  const { expenses } = useExpenses();
  console.log(expenses);
  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    // <></>
    <ExpensesOutput
      expensesPeriod="Last 7 Days"
      expenses={recentExpenses}
      fallbackText="No expenses registered for the last 7 days."
    />
  );
};

export default RecentExpenses;
