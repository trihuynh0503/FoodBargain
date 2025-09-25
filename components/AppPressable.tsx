// components/AppPressable.tsx
import React from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";

export default function AppPressable(props: PressableProps) {
  return (
    <Pressable
      {...props}
      style={({ pressed }) => [
        styles.base,
        typeof props.style === "function"
          ? props.style({ pressed })
          : props.style,
        pressed && styles.pressed,
      ]}
    />
  );
}

const styles = StyleSheet.create({
  base: {
    color: "black",
    borderRadius: 12,
    padding: 12,
    margin: 10,
    backgroundColor: "#FAD207",
  },
  pressed: {
    opacity: 0.7,
  },
});