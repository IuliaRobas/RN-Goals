import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TouchableHighlight
} from "react-native";

const GoalCategoryCard = props => {
  const item = props.item;

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => {
        props.showModalHandler.bind(this);
        props.showModalHandler(item.id);
      }}
    >
      <View style={styles.goal}>
        <Text style={styles.text}>{item.text}</Text>
        <Text style={styles.text}>{item.description}</Text>
        <Text style={styles.text}>{item.progress}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  goal: {
    justifyContent: "center",
    borderColor: "white",
    borderWidth: 2,
    borderStyle: "solid",
    backgroundColor: "white",
    padding: 10,
    width: 330,
    height: 80,
    borderRadius: 5,
    marginTop: 8
  },
  text: {
    color: "black",
    textAlign: "center"
  }
});

export default GoalCategoryCard;
