import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import ProgressScreen from "./ProgressScreen";
import ProfileScreen from "./ProfileScreen";
import SettingsScreen from "./SettingsScreen";
import CommunityScreen from "./CommunityScreen";
import Icon from "react-native-vector-icons/Ionicons";

const transitionSpecConfig = {
  animation: "spring",
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01
  }
};

const TabNavigator = createBottomTabNavigator();

const HomeScreen = props => {
  props.navigation.setOptions({
    headerLeft: null
    //gesturesEnabled: false,
    //animationEnabled: false,
    // transitionSpec: {
    //   open: transitionSpecConfig,
    //   close: transitionSpecConfig
    // }
  });

  return (
    <TabNavigator.Navigator
      tabBarOptions={{
        showIcon: true,
        style: {
          justifyContent: "center",
          alignItems: "center"
        },
        activeTintColor: "black",
        showIcon: true
      }}
    >
      <TabNavigator.Screen
        name="Dailies"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-person" color={color} size={25} />
          )
        }}
      />
      <TabNavigator.Screen
        name="Habits"
        component={ProgressScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-repeat" color={color} size={25} />
          )
        }}
      />
      <TabNavigator.Screen
        name="Categories"
        component={CommunityScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-people" color={color} size={25} />
          )
        }}
      />
      <TabNavigator.Screen
        name="Challenges"
        component={CommunityScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-people" color={color} size={25} />
          )
        }}
      />
      <TabNavigator.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="ios-settings" color={color} size={25} />
          )
        }}
      />
    </TabNavigator.Navigator>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "black"
  }
});

export default HomeScreen;
