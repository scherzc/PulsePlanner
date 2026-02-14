import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Main container
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  keyboardAvoid: {
    flex: 1,
    width: "100%",
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
    paddingTop: 60,
    paddingBottom: 40,
    minHeight: "100%",
  },

  // Title Style
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    fontFamily: "Roboto",
    letterSpacing: 2,
    color: "white",
    textShadowColor: "rgba(0,0,0,0.75)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },

  // Form wrapper: above background, scrollable on small viewports
  formWrapper: {
    width: "100%",
    maxWidth: 400,
    zIndex: 1,
    alignSelf: "center",
  },

  hint: {
    fontSize: 13,
    color: "rgba(255,255,255,0.9)",
    textAlign: "center",
    marginTop: 8,
    textShadowColor: "rgba(0,0,0,0.8)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },

  hintDark: {
    color: "rgba(255,255,255,0.85)",
  },

  // Input Field Styles
  input: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    marginBottom: 15,
    paddingHorizontal: 20,
    fontSize: 16,
    fontWeight: "600",
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#f9f9f9",
  },

  inputDark: {
    backgroundColor: "#2a2a2a",
    color: "#fff",
    borderColor: "#555",
  },

  // Button Styling with hover/active effects
  button: {
    width: "100%",
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff6200",
    marginBottom: 15,
    elevation: 5,
    transform: [{ scale: 1 }],
  },

  // Button text style
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 1,
  },

  // Button active/hover effect
  buttonActive: {
    transform: [{ scale: 1.1 }], // Button grows when pressed
  },

  // Icon for theme toggle
  themeToggle: {
    position: "absolute",
    top: 40,
    right: 20,
    padding: 10,
    borderRadius: 50,
    backgroundColor: "rgba(0,0,0,0.5)",
    elevation: 5,
    zIndex: 2,
  },

  // Focused input styling
  inputFocus: {
    borderColor: "#ff6200", // Vibrant border color on focus
    backgroundColor: "#fff", // Brighter background on focus
  },

  // Background Image — full viewport so it works on web and native
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: "100%",
    height: "100%",
  },

  // Simple hover animation for inputs when focused
  inputHover: {
    borderColor: "#ff6200",
    backgroundColor: "#fff",
  },

});

export default styles;
