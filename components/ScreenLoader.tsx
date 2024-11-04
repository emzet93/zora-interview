import { StyleSheet } from "react-native";
import { theme } from "@/constants/theme";
import { Text } from "@/components/Text";
import Animated, { FadeIn } from "react-native-reanimated";

export function ScreenLoader() {
  return (
    <Animated.View entering={FadeIn} style={styles.container}>
      <Text weight="bold" size="l">
        Loading...
      </Text>
    </Animated.View>
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
