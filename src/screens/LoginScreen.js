import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { FitnessItems } from "../context/Context";
import styles from "./Styles/LoginScreenStyles";

const DEMO_USER = "demo";
const DEMO_PASS = "demo123";

const LoginScreen = () => {
  const { darkMode, setDarkMode } = useContext(FitnessItems);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleLogin = () => {
    const u = username.trim();
    const p = password.trim();
    if (u && p) {
      alert("Logged in successfully!");
      navigation.navigate("Home", { username: u });
    } else {
      alert("Please enter valid credentials. Try: " + DEMO_USER + " / " + DEMO_PASS);
    }
  };

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? "#1F1F1F" : "#FFFFFF" },
      ]}
    >
      <Image
        source={require("../../assets/enter-gym-background.jpg")}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      <TouchableOpacity
        onPress={() => setDarkMode(!darkMode)}
        style={styles.themeToggle}
      >
        <Ionicons
          name={darkMode ? "sunny" : "moon"}
          size={24}
          color={darkMode ? "white" : "black"}
        />
      </TouchableOpacity>

      <KeyboardAvoidingView
        style={styles.keyboardAvoid}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={Platform.OS === "ios" ? 60 : 0}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.formWrapper}>
            <Text style={styles.title}>Welcome to Pulse Planner</Text>

            <TextInput
              style={[
                styles.input,
                darkMode && styles.inputDark,
                username ? styles.inputFocus : null,
              ]}
              placeholder="Username"
              placeholderTextColor={darkMode ? "#aaa" : "#555"}
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
              autoCorrect={false}
            />

            <TextInput
              style={[
                styles.input,
                darkMode && styles.inputDark,
                password ? styles.inputFocus : null,
              ]}
              placeholder="Password"
              placeholderTextColor={darkMode ? "#aaa" : "#555"}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />

            <TouchableOpacity
              style={[styles.button, styles.buttonActive]}
              onPress={handleLogin}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <Text style={[styles.hint, darkMode && styles.hintDark]}>
              Demo: {DEMO_USER} / {DEMO_PASS}
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;
