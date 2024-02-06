import { View, Text } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import useExpenses from "../store/expenses";

const AllExpenses = () => {
  const { expenses } = useExpenses();

  return (
    <ExpensesOutput
      expensesPeriod="Total"
      expenses={expenses}
      fallbackText="No registered expenses found!"
    />
  );
};

export default AllExpenses;
