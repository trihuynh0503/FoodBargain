import AppPressable from "@/components/AppPressable";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image  style={styles.logo} source={require('../assets/images/app-logo.png')}/>
      <Text style={styles.headerText}>Create your account to start saving on food deals!</Text>
      <View style={styles.inputGroup} > 
        <Text style={styles.label}>Full name</Text>
        <TextInput placeholder="First and Last Name" placeholderTextColor= "#666" style={styles.textInput}></TextInput>
      </View>
      <View style={styles.inputGroup} > 
        <Text style={styles.label}>Email</Text>
        <TextInput placeholder="Email" placeholderTextColor= "#666" style={styles.textInput}></TextInput>
      </View>

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
      <View style={styles.inputGroup} > 
        <Text style={styles.label}>Confirm Password</Text>
        <TextInput placeholder="password" 
        style={styles.textInput}
        placeholderTextColor= "#666"
        secureTextEntry></TextInput>
      </View>
      <AppPressable>Register</AppPressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 16,
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
    fontFamily: "Poppins",
    color: "white",
    fontSize: 15,
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


