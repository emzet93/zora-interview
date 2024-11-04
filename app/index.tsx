import { Pressable, StyleSheet, View } from "react-native";
import { Link } from "expo-router";
import { theme } from "@/constants/theme";
import { Text } from "@/components/Text";
import { useSearchImagesQuery } from "@/queries/image";
import { ScreenLoader } from "@/components/ScreenLoader";
import { ScreenError } from "@/components/ScreenError";
import { SearchBox } from "@/components/SearchBox";
import { useState } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const { data, isPending, error } = useSearchImagesQuery("skate");

  console.log({
    data,
    error,
  });

  return (
    <View style={styles.container}>
      <SearchBox value={search} setValue={setSearch} />
      <View style={styles.content}>
        {(() => {
          if (data) {
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

          if (isPending) {
            <ScreenLoader />;
          }

          return (
            <ScreenError>
              <Text align="center">{`We couldn't load the data.\nPlease try again.`}</Text>
            </ScreenError>
          );
        })()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
  },
});
