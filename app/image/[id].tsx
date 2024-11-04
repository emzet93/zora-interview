import { StyleSheet, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Image() {
  const { id } = useLocalSearchParams();

  console.log({ id });

  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
});
