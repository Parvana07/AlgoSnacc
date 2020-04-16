import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "./screens/LoginScreen.jsx";
import HomeScreen from "./screens/HomeScreen.jsx";
import ChallengeScreen from "./screens/ChallengeScreen.jsx";
import ExplanationScreen from "./screens/ExplanationScreen.jsx";
import LoginScreen from "./screens/LoginScreen.jsx";
import SignUp from "./components/SignUp.jsx";
import BottomTabNav from "./components/BottomTabNav.jsx";
import SnackScreen from "./screens/SnackScreen.jsx";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Explanation">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Challenge" component={ChallengeScreen} />
        <Stack.Screen name="Explanation" component={ExplanationScreen} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Home" component={BottomTabNav} />
        <Stack.Screen name="Snacks" component={SnackScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
