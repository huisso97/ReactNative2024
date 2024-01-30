import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { ItemData } from "./types";

export default function App() {
  const [goals, setGoals] = useState<{ text: string; id: string }[]>([]);

  const handleAddGoal = (goalText: string) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: goalText, id: Math.random().toString() },
    ]);
  };

  const handleDeleteGoal = (id: string) => {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={handleAddGoal} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={({ item }: { item: ItemData }) => {
            return <GoalItem item={item} onDelete={handleDeleteGoal} />;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5,
  },
});
