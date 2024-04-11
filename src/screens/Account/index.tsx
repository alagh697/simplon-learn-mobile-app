import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Platform,
  Dimensions,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { auth, db } from "../../../firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import AppColors from "../../styles/color";
import { onAuthStateChanged } from "firebase/auth";

export default function Dashboard({ navigation }: { navigation: any }) {
  const [userInfo, setUserInfo] = useState<any | undefined>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        setCurrentUser(user);
        
      } else {
        navigation.navigate("Login")
      }
    });
    
    return unsubscribe; // Cleanup on unmount
  }, [auth.currentUser]);

  const handleSignout = async () => {
    await auth.signOut();
  };
  const Modal = () => {
    Alert.alert("Auth App", "Do you really want to logout", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
      },
      { text: "Logout", onPress: handleSignout },
    ]);
  };

  const getData = async () => {
    const docRef = doc(db, "users", currentUser?.uid);
    const userInfo = await getDoc(docRef);
    if (userInfo?.exists()) {
      console.log("Document data:", userInfo.data());
      setUserInfo(userInfo.data());
    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    if(currentUser){getData();}
    
  }, [currentUser]);

  // console.log(currentUser)
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>Welcome {userInfo?.Name}! </Text>
      <View>
        <TouchableOpacity style={styles.button} onPress={Modal}>
          <Text style={{ color: AppColors.light, fontSize: 20 }}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: AppColors.primary,
    padding: 10,
    borderRadius: 8,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    marginTop: 30,
  },
});