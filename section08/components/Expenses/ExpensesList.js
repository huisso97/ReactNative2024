import { View, Text, FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

const renderExpenseItem = (itemData) => {
  console.log(">>>itemdata.item", itemData.item);
  return <ExpenseItem {...itemData.item} />;
};

const ExpensesList = ({ expenses }) => {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default ExpensesList;
