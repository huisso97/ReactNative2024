import { View, Text, StyleSheet } from "react-native";
import Ttile from "../components/Ttile";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      {/* Guess */}
      <Ttile>Opponent's Guess</Ttile>
      <View>
        <Text>Higher or lower?</Text>
        {/* + - */}
      </View>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 14,
  },
});
