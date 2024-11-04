import {
  Keyboard,
  Pressable,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
} from "react-native";
import { theme } from "@/constants/theme";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import Animated, {
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Text } from "@/components/Text";

interface SearchBoxProps extends TextInputProps {
  value: string;
  setValue: (v: string) => void;
}

const cancelButtonWidth = 54;

export function SearchBox({ value, setValue, ...inputProps }: SearchBoxProps) {
  const safeAreaInsets = useSafeAreaInsets();
  const isFocused = useSharedValue(false);

  const cancelButtonStyle = useAnimatedStyle(
    () => ({
      width: withTiming(isFocused.value ? cancelButtonWidth : 0, {
        duration: 150,
      }),
    }),
    [isFocused],
  );

  return (
    <View style={[styles.container, { paddingTop: safeAreaInsets.top }]}>
      <View style={styles.inputWrapper}>
        <Feather
          name="search"
          size={theme.spacing.s}
          color={theme.colors.textPlaceholder}
        />
        <TextInput
          value={value}
          onChangeText={setValue}
          placeholder="Search"
          placeholderTextColor={theme.colors.textPlaceholder}
          style={styles.input}
          selectionColor={theme.colors.textPlaceholder}
          onFocus={() => (isFocused.value = true)}
          onBlur={() => (isFocused.value = false)}
        />
        {!!value && (
          <Animated.View entering={FadeIn} exiting={FadeOut}>
            <Pressable onPress={() => setValue("")}>
              <Feather
                name="x-circle"
                size={theme.spacing.s}
                color={theme.colors.textPlaceholder}
              />
            </Pressable>
          </Animated.View>
        )}
      </View>
      <Animated.View style={[styles.cancelButtonContainer, cancelButtonStyle]}>
        <Pressable
          style={styles.cancelButton}
          onPress={() => {
            setValue("");
            Keyboard.dismiss();
          }}
        >
          <Text weight="bold" size="xs" align="right" numberOfLines={1}>
            Cancel
          </Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    padding: theme.spacing.xs,
    flexDirection: "row",
    alignItems: "stretch",
  },
  inputWrapper: {
    flex: 1,
    padding: theme.spacing.xs,
    borderRadius: theme.card.borderRadius,
    backgroundColor: theme.colors.backgroundLight,
    flexDirection: "row",
    gap: theme.spacing.xs,
    alignItems: "center",
  },
  input: {
    flex: 1,
    color: theme.colors.text,
  },
  cancelButtonContainer: {
    width: cancelButtonWidth,
    overflow: "hidden",
  },
  cancelButton: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    minWidth: cancelButtonWidth,
    justifyContent: "center",
    alignItems: "center",
  },
});
