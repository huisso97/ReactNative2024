import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const GoalInput = ({
  onAddGoal,
}: {
  onAddGoal: (goalText: string) => void;
}) => {
  const [goalText, setGoalText] = useState("");

  const onChangeText = (text: string) => {
    setGoalText(text);
  };

  const handleAddGoal = () => {
    onAddGoal(goalText);
    setGoalText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal!"
        value={goalText}
        onChangeText={onChangeText}
      />
      <Button title="Add Goal" onPress={handleAddGoal} />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
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
});
