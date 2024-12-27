import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={{
          backgroundColor: "yellow",
          width: "full",
          color: "red",
          fontSize: 30,
          fontWeight: "bold",
        }}
      >
        Hello World😍
      </Text>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    innerHeight: 50,
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "start",
  },
});
