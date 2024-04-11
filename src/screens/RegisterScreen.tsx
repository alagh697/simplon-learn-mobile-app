import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Keyboard,
  Alert,
  TouchableOpacity,
} from "react-native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import AppColors from "../styles/color";
import { MaterialIcons } from "@expo/vector-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth , db} from "../../firebaseConfig"
import { doc, setDoc } from "firebase/firestore";

export default function RegisterScreen({navigation}:any) {
  const [name, setName] = useState<string | undefined>();
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();

  const nav = useNavigation<NativeStackNavigationProp<any>>();


  const registerAndGoToMainFlow = async () => {
    // Register User Query Here
    if (email && password) {
      await createUserWithEmailAndPassword(auth, email.trim(), password)
      .then((userCredential) => {
        const user = userCredential.user;
        // setLoading(false);
        setDoc(doc(db, "users", user.uid), {
          Name: name,
          Email: email,
          CreatedAt: new Date().toUTCString(),
        });
      })
      .then(() => {
        alert("account created successfully 🎉")
      nav.navigate("BottomTabNav")
      })
      .catch((err: any) => {
        alert(err.message);
      });
    }
  };

  return (
    <Pressable style={styles.contentView} onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.contentView}>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Register</Text>
          </View>
          <View style={styles.mainContent}>
            <TextInput
              style={styles.loginTextField}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.loginTextField}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              inputMode="email"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.loginTextField}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <TouchableOpacity
            onPress={registerAndGoToMainFlow}
            style={styles.button}
          >
            <Text style={styles.buttonText}>{`Explorer les cours`}</Text>
            <MaterialIcons
              name="navigate-next"
              size={24}
              color={AppColors.primary}
            />
          </TouchableOpacity>
          <View style={styles.signupGroup}>
          <Text style={styles.new}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.signup}>Login</Text>
          </TouchableOpacity>
        </View>
        </View>
      </SafeAreaView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  contentView: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    flex: 1,
    marginHorizontal: 50,
    backgroundColor: "white",
    paddingTop: 20,
  },
  titleContainer: {
    flex: 1.2,
    justifyContent: "center",
  },
  titleText: {
    fontSize: 45,
    textAlign: "center",
    fontWeight: "200",
  },
  loginTextField: {
    borderBottomWidth: 1,
    height: 60,
    fontSize: 30,
    marginVertical: 10,
    fontWeight: "300",
  },
  mainContent: {
    flex: 6,
  },
  button: {
    marginTop: "auto",
    marginBottom: 70,
    backgroundColor: AppColors.light,
    paddingHorizontal: 15,
    paddingVertical: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "75%",
  },
  buttonText: {
    color: AppColors.primary,
    textTransform: "uppercase",
    fontFamily: "NunitoSans_800ExtraBold",
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
