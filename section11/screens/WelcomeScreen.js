import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import axios from "axios";

import useAuth from "../store/auth";

function WelcomeScreen() {
  const [fetchedMessage, setFetchedMesage] = useState("");

  const { token } = useAuth();

  useEffect(() => {
    axios
      .get(
        "https://reactnative2024-b994a-default-rtdb.asia-southeast1.firebasedatabase.app/message.json?auth" +
          token
      )
      .then((res) => {
        setFetchedMesage(res.data);
      });
  }, [token]);

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>{fetchedMessage}</Text>
      <Text>You authenticated successfully!</Text>
    </View>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 32,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
