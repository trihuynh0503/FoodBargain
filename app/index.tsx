import AppPressable from "@/components/AppPressable";
import { useRouter } from "expo-router";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

const { width } = Dimensions.get("window");

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image  style={styles.logo} source={require('../assets/images/app-logo.png')}/>
      <Text style={styles.text}>Register as: </Text>
      <AppPressable onPress={() => router.push("/customerSignUp")}>Customer</AppPressable>
      <AppPressable>Restaurant Partner</AppPressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white"
  },
  logo: {
    width: 250,
    resizeMode: "contain"
  }
})
