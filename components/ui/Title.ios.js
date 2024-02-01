import { Platform, StyleSheet, Text } from "react-native";

const Ttile = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Ttile;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    // fontWeight: "bold",
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    // borderWidth: 2,
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});
