import { focusManager, onlineManager } from "@tanstack/query-core";
import NetInfo from "@react-native-community/netinfo";
import { AppState } from "react-native";
import { QueryClient } from "@tanstack/react-query";

export const setupReactQuery = () => {
  onlineManager.setEventListener((setOnline) => {
    return NetInfo.addEventListener((state) => {
      setOnline(!!state.isConnected);
    });
  });

  AppState.addEventListener("change", (status) => {
    focusManager.setFocused(status === "active");
  });

  return new QueryClient();
};
