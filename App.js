import React from "react";
import { StyleSheet, Text, View } from "react-native";
import LogInScreen from "./screens/LogInScreen";
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode="modal"
        screenOptions={{
          cardStyle: { backgroundColor: "black" }
        }}
      >
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{
            title: "Log In",
            headerStyle: {
              backgroundColor: "black"
            },
            headerTitleStyle: {
              color: "white"
            }
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
            headerStyle: {},

            headerTitleStyle: {}
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
