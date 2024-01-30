import { Pressable, StyleSheet, Text, View } from "react-native";
import { ItemData } from "../types";

const GoalItem = ({
  item,
  onDelete,
}: {
  item: ItemData;
  onDelete: (id: string) => void;
}) => {
  const handleDelete = () => {
    onDelete(item.id);
  };
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#350771" }}
        onPress={handleDelete}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    padding: 8,
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});
