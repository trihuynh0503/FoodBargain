import AppPressable from "@/components/AppPressable";
import { Link } from "@react-navigation/native";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";


export default function Index() {
  return (
    <View style={styles.container}>
      <Image  style={styles.logo} source={require('../assets/images/app-logo.png')}/>
      {/* <Text style={styles.text}>Login to your account</Text> */}
      <View style={styles.inputGroup} > 
        <Text style={styles.label}>Username</Text>
        <TextInput placeholder="username or email" placeholderTextColor= "#666" style={styles.textInput}></TextInput>
      </View>
      <View style={styles.inputGroup} > 
        <Text style={styles.label}>Password</Text>
        <TextInput placeholder="password" 
          style={styles.textInput}
          placeholderTextColor= "#666"
          secureTextEntry></TextInput>
      </View>
      <AppPressable>Log In</AppPressable>
      <Text style={styles.text}>Don't have an account? <Link screen="index" style={styles.link}>Register here</Link></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 14,
    fontFamily: "Poppins"
  },
  logo: {
    marginTop: 50,
    width: 250,
    resizeMode: "contain",
    height: 80
  },
  inputGroup: {
    marginTop: 10,
    marginBottom: 10,
  },
  label: {
    color: "white",
    fontFamily: "Poppins",
    fontSize: 16,
    marginBottom: 1,
  },
  textInput: {
    padding: 10,
    borderWidth: 2,
    borderColor: "#666",
    borderRadius: 10,
    
    color: "white",
    backgroundColor: "rgba(255,255,255,0.05)",
  },
  link: {
    color: "#FAD207",
  }
})
