import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const Ttile = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Ttile;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.accent500,
    textAlign: "center",
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: 12,
  },
});
