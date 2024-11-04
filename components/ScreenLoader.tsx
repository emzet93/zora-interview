import { ActivityIndicator, StyleSheet } from "react-native";
import { theme } from "@/constants/theme";
import Animated, { FadeIn } from "react-native-reanimated";

export function ScreenLoader() {
  return (
    <Animated.View entering={FadeIn} style={styles.container}>
      <ActivityIndicator color={theme.colors.textPlaceholder} />
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
