import { Text as RNText, type TextProps as RNTextProps } from "react-native";
import { theme, Theme } from "@/constants/theme";

export type TextProps = RNTextProps & {
  size?: keyof Theme["font"];
  weight?: "regular" | "semibold" | "bold";
  color?: keyof Theme["colors"];
  secondary?: boolean;
};

export function Text({
  style,
  size = "s",
  weight = "regular",
  secondary = false,
  color = "text",
  ...rest
}: TextProps) {
  return (
    <RNText
      style={[
        {
          color: theme.colors[color],
          fontSize: theme.font[size],
          fontWeight: weight,
        },
        secondary && { opacity: 0.7 },
        style,
      ]}
      {...rest}
    />
  );
}