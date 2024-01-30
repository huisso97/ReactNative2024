import { useState } from "react";
import { Button, FlatList, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { ItemData } from "./types";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [goals, setGoals] = useState<{ text: string; id: string }[]>([]);

  const handleStartAddGoal = () => setModalIsVisible(true);

  const handleEndAddGoal = () => setModalIsVisible(false);

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
    <>
      {/* 상태바 글자들 흰색으로 변경 */}
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#7e3bd6"
          onPress={handleStartAddGoal}
        />

        <GoalInput
          onAddGoal={handleAddGoal}
          modalIsVisible={modalIsVisible}
          onEndAddGoal={handleEndAddGoal}
        />

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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
