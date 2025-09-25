import { Stack } from "expo-router";
import { SafeAreaView, StyleSheet } from "react-native";

export default function Layout() {
  return (
      <Stack
        screenOptions={{
          headerShown: false,
          headerStyle: { backgroundColor: "black" },
          headerTintColor: "white", // header text/buttons
          contentStyle: { backgroundColor: "black" }, // all screens
        }}
      />
  );
};

