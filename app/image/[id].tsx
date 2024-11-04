import { StyleSheet, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useImageDetailsQuery } from "@/queries/image";

export default function Image() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const { data } = useImageDetailsQuery(id);

  console.log(data);

  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
  },
});
