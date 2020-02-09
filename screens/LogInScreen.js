import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const LogInScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Log In Screen</Text>
      <Button
        title="navigate"
        onPress={() => props.navigation.navigate("Home", { name: "Iulia" })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center"
  }
});

export default LogInScreen;
