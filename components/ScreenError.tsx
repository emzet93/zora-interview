import { StyleSheet } from "react-native";
import { theme } from "@/constants/theme";
import { ReactNode } from "react";
import Animated, { FadeIn } from "react-native-reanimated";

interface ScreenErrorProps {
  children: ReactNode;
}

export function ScreenError({ children }: ScreenErrorProps) {
  return (
    <Animated.View entering={FadeIn} style={styles.container}>
      {children}
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
