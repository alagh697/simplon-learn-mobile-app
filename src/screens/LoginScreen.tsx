import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    Platform,
    Dimensions,
  } from "react-native";
  import React, { useState } from "react";

  import { Feather } from "@expo/vector-icons";
  import {auth , db} from "../../firebaseConfig"
  import { Entypo } from "@expo/vector-icons";
  import { signInWithEmailAndPassword } from "firebase/auth";
import AppColors from "../styles/color";
  
  const { width, height } = Dimensions.get("window");
  let top;
  if (Platform.OS === "ios") {
    top = height * 0.02;
  } else {
    top = 0;
  }
  
  export default function Login({ navigation }: { navigation: any }) {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<any>("");
    const [loading, setLoading] = useState<boolean>(false);
  
    const handleSignin = async () => {
      setLoading(true);
      await
      signInWithEmailAndPassword(auth, email.trim(), password)
        .then((userCredential) => {
          const user = userCredential.user;
          setLoading(false);
          alert("login successful :)");
          navigation.navigate("BottomTabNav")
        })
        .catch((err: any) => {
          alert(err.message);
        });
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.loginHeader}>
          <Text style={styles.loginHeaderText}>Let's sign you in 🚀</Text>
        </View>
  
        <View style={styles.loginContainer}>
          {/* Email */}
          <View style={styles.emailContainer}>
            <Text style={styles.emailText}>Email</Text>
            <TextInput
              style={styles.emailInput}
              placeholder="Enter your email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              autoCapitalize="none"
            />
          </View>
          {/* Password */}
          <View style={styles.passwordContainer}>
            <Text style={styles.passwordText}>Password</Text>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter your password"
              value={password}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          {/* Forgot Password */}
          <View style={styles.forgotContainer}>
            <TouchableOpacity onPress={() => navigation.push("Forgot")}>
              <Text style={styles.forgotText}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          {/* Login Button */}
          <View style={styles.loginButton}>
            <TouchableOpacity 
            onPress={handleSignin}>
              <Text style={styles.loginButtonText}>
                {
                  loading ? "Loading" : "Login"
                }
              </Text>
            </TouchableOpacity>
          </View>
  
          <View style={styles.signupGroup}>
            <Text style={styles.new}>New here?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text style={styles.signup}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 15,
      marginTop: height * 0.05,
    },
    arrowContainer: {
      width: 40,
      height: 40,
      borderTopLeftRadius: 8,
      borderBottomRightRadius: 8,
      backgroundColor: AppColors.primary,
      justifyContent: "center",
      alignItems: "center",
    },
    loginHeader: {
      marginTop: 20,
    },
    loginHeaderText: {
      fontSize: 36,
      fontWeight: "bold",
    },
    loginContainer: {
      marginTop: 20,
    },
    emailContainer: {
      marginTop: 20,
    },
    emailText: {
      fontSize: 16,
      fontWeight: "bold",
    },
    emailInput: {
      marginTop: 10,
      width: "100%",
      height: 50,
      backgroundColor: AppColors.light,
      borderWidth: 1,
      borderColor: AppColors.light,
      borderRadius: 8,
      paddingLeft: 10,
    },
    passwordContainer: {
      marginTop: 20,
    },
    passwordText: {
      fontSize: 16,
      fontWeight: "bold",
    },
    passwordInput: {
      marginTop: 10,
      width: "100%",
      height: 50,
      backgroundColor: AppColors.light,
      borderRadius: 8,
      paddingLeft: 10,
      borderWidth: 1,
      borderColor: AppColors.light,
    },
    forgotContainer: {
      marginTop: 20,
      alignItems: "flex-end",
    },
    forgotText: {
      fontSize: 16,
      fontWeight: "bold",
      color: AppColors.primary,
    },
    loginButton: {
      marginTop: 20,
      width: "100%",
      height: 50,
      backgroundColor: AppColors.primary,
      borderRadius: 8,
      justifyContent: "center",
      alignItems: "center",
    },
    loginButtonText: {
      fontSize: 16,
      fontWeight: "bold",
      color: AppColors.light,
    },
    signupGroup: {
      flexDirection: "row",
      marginTop: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    signup: {
      color: AppColors.primary,
      fontSize: 16,
      fontWeight: "bold",
      marginRight: 5,
    },
    new: {
      fontSize: 16,
      fontWeight: "500",
      marginRight: 5,
    },
  });