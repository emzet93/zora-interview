import {
  ActivityIndicator,
  KeyboardAvoidingView,
  RefreshControl,
  StyleSheet,
  View,
} from "react-native";
import { theme } from "@/constants/theme";
import { Text } from "@/components/Text";
import { useSearchImagesQuery } from "@/queries/image";
import { ScreenLoader } from "@/components/ScreenLoader";
import { ScreenError } from "@/components/ScreenError";
import { SearchBox } from "@/components/SearchBox";
import { useMemo, useState } from "react";
import { MasonryFlashList } from "@shopify/flash-list";
import { ImageThumbnail } from "@/components/ImageThumbnail";

export default function Search() {
  const [search, setSearch] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);

  const { data, isPending, isFetchingNextPage, fetchNextPage, refetch } =
    useSearchImagesQuery(search);

  const flatData = useMemo(
    () => data?.pages.flatMap((page) => page.results),
    [data],
  );

  const onRefresh = async () => {
    try {
      setIsRefreshing(true);
      await refetch();
    } finally {
      setIsRefreshing(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      contentContainerStyle={{ flex: 1 }}
    >
      <View style={styles.container}>
        <SearchBox value={search} setValue={setSearch} />
        <View style={styles.content}>
          {(() => {
            if (search === "") {
              return (
                <View style={styles.searchEmpty}>
                  <Text>Type something</Text>
                </View>
              );
            }

            if (flatData?.length === 0) {
              return (
                <View style={styles.searchEmpty}>
                  <Text>No data found related to your search</Text>
                </View>
              );
            }

            if (flatData) {
              return (
                <MasonryFlashList
                  data={flatData}
                  estimatedItemSize={100}
                  showsVerticalScrollIndicator={false}
                  onEndReached={fetchNextPage}
                  refreshControl={
                    <RefreshControl
                      refreshing={isRefreshing}
                      onRefresh={onRefresh}
                      tintColor={theme.colors.textPlaceholder}
                    />
                  }
                  ListFooterComponent={
                    <View
                      style={{
                        height: 50,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {isFetchingNextPage && (
                        <ActivityIndicator
                          color={theme.colors.textPlaceholder}
                        />
                      )}
                    </View>
                  }
                  numColumns={3}
                  keyExtractor={(image) => image.id}
                  renderItem={({ item: image }) => (
                    <ImageThumbnail image={image} />
                  )}
                />
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
          })()}
        </View>
      </View>
    </KeyboardAvoidingView>
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
  searchEmpty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
