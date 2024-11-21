import React, { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator"; // Your main app screens
import AuthStack from "./src/navigation/AuthStack"; // Authentication screens
import { NavigationContainer } from "@react-navigation/native"; // Import the NavigationContainer
import { getAuth, onAuthStateChanged } from "firebase/auth"; // Firebase authentication

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Set the initial state to null to prevent a flicker on app load

  // Check if the user is logged in or not
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true); // User is logged in
      } else {
        setIsAuthenticated(false); // User is not logged in
      }
    });

    // Clean up the listener
    return () => unsubscribe();
  }, []);

  if (isAuthenticated === null) {
    // Return a loading state while Firebase is checking the authentication status
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Only wrap with NavigationContainer here */}
      <NavigationContainer>
        {isAuthenticated ? (
          <AppNavigator /> // Main app navigation if authenticated
        ) : (
          <AuthStack /> // Authentication stack if not authenticated
        )}
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
