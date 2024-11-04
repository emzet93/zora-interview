import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useImageDetailsQuery } from "@/queries/image";
import { ScreenLoader } from "@/components/ScreenLoader";
import { ScreenError } from "@/components/ScreenError";
import { Text } from "@/components/Text";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { theme } from "@/constants/theme";
import { router } from "expo-router";
import Feather from "@expo/vector-icons/Feather";

export default function ImageScreen() {
  const safeAreaInsets = useSafeAreaInsets();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data: image, isPending } = useImageDetailsQuery(id);

  if (image) {
    return (
      <View style={styles.container}>
        <View style={[styles.header, { paddingTop: safeAreaInsets.top }]}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Feather
              name="chevron-left"
              color={theme.colors.text}
              size={theme.spacing.m}
            />
          </Pressable>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: safeAreaInsets.bottom }}
        >
          <Image
            style={{ width: "100%", aspectRatio: image.width / image.height }}
            source={image.urls.regular}
            placeholder={image.urls.thumb}
            placeholderContentFit="cover"
            contentFit="cover"
          />
          <View style={styles.info}>
            <Text size="s" weight="bold">
              {image.user.name}
            </Text>
            <Text size="xs">{image.description}</Text>
          </View>
        </ScrollView>
      </View>
    );
  }

  if (isPending) {
    return <ScreenLoader />;
  }

  return (
    <ScreenError>
      <Text align="center">{`We couldn't load the data.\nPlease try again.`}</Text>
    </ScreenError>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {},
  backButton: {
    padding: theme.spacing.xs,
  },
  image: {
    width: "100%",
  },
  info: {
    padding: theme.spacing.xs,
    gap: theme.spacing.xs / 2,
  },
});
