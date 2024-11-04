import { Pressable, StyleSheet, View } from "react-native";
import { Link } from "expo-router";
import { theme } from "@/constants/theme";
import { Text } from "@/components/Text";

export default function Search() {
  return (
    <View style={styles.container}>
      <Link href="/image/randomId" asChild>
        <Pressable onPress={() => {}}>
          <Text>Go to details</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    justifyContent: "center",
    alignItems: "center",
  },
});
