import { Pressable, StyleSheet } from "react-native";
import { theme } from "@/constants/theme";
import { UnsplashImage } from "@/types/image";
import { Image } from "expo-image";
import { usePrecacheImage } from "@/queries/image";

import { router } from "expo-router";

interface ImageThumbnailProps {
  image: UnsplashImage;
}

export function ImageThumbnail({ image }: ImageThumbnailProps) {
  const precacheImage = usePrecacheImage();

  return (
    <Pressable
      onPress={() => {
        precacheImage(image);
        router.push({
          pathname: "/image/[id]",
          params: { id: image.id },
        });
      }}
      style={[
        styles.container,
        {
          aspectRatio: image.width / image.height,
        },
      ]}
    >
      <Image
        style={styles.image}
        source={image.urls.thumb}
        contentFit="cover"
        recyclingKey={image.id}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: StyleSheet.hairlineWidth,
  },
  image: {
    width: "100%",
    height: "100%",
    backgroundColor: theme.colors.backgroundLight,
  },
});
