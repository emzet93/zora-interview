import { Pressable, StyleSheet, View } from "react-native";
import { Link } from "expo-router";
import { theme } from "@/constants/theme";
import { Text } from "@/components/Text";
import { useSearchImagesQuery } from "@/queries/image";

export default function Search() {
  const { data, error } = useSearchImagesQuery("skate");

  console.log({
    data,
    error,
  });

  if (!data) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Link href={`/image/${data.pages[0].results[0].id}`} asChild>
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
