import React, { useState, useEffect, useCallback, useReducer } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  FlatList,
  Modal,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";

import DateTimePickerModal from "react-native-modal-datetime-picker";
import Icon from "react-native-vector-icons/Ionicons";

import GoalCard from "../components/GoalCard";

const goals = [
  {
    id: "1",
    text: "Drink Water",
    description: "adasda",
    progress: 2,
    details: ""
  },
  { id: "2", text: "goal2" },
  { id: "3", text: "goal3" },
  { id: "4", text: "goal4" },
  { id: "5", text: "goal5" }
];

const ProfileScreen = props => {
  const [showModal, setShowModal] = useState("");
  const [chosenGoalID, setChosenGoalID] = useState("");
  const [showReminderModal, setShowReminderModal] = useState("");
  const [showDueDateCalendar, setShowDueDateCalendarModal] = useState("");
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const showModalHandler = itemID => {
    setShow(false);
    setShowModal(showModal => !showModal);
    setDatePickerVisibility(false);
    setChosenGoalID(itemID);
  };

  const showReminderModalHandler = () => {
    setShowReminderModal(showReminderModal => !showReminderModal);
  };

  const showDueDateCalendarHandler = () => {
    setShowDueDateCalendarModal(showDueDateCalendar => !showDueDateCalendar);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    setDate(currentDate);
    setShow(Platform.OS === "ios" ? true : false);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("datetime");
  };

  const showTimepicker = () => {
    showMode("datetime");
  };

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    hideDatePicker();
  };

  return (
    <View style={styles.screen}>
      <TouchableWithoutFeedback onPress={showModalHandler}>
        <Modal animationType="slide" transparent={true} visible={showModal}>
          <View style={styles.modal}>
            <View style={styles.modalContainer}>
              <TouchableHighlight onPress={showModalHandler}>
                <Text style={styles.white}>Hide Modal</Text>
              </TouchableHighlight>
              <Text style={styles.white}>{chosenGoalID}</Text>
              <View style={styles.reminderDueDateContainer}>
                <TouchableWithoutFeedback onPress={showReminderModalHandler}>
                  <View style={styles.reminderDueDateItemContainer}>
                    <Icon name="ios-timer" size={25} color="#fff" />
                    <Text style={styles.white}>Set Reminder</Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={showDatePicker}>
                  <View style={styles.reminderDueDateItemContainer}>
                    <Icon name="ios-calendar" size={25} color="#fff" />
                    <Text style={styles.white}>Set Due Date</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
          <DateTimePickerModal
            testID="dateTimePicker"
            timeZoneOffsetInMinutes={0}
            value={date}
            is24Hour={true}
            display="default"
            // onChange={onChange}
            //style={{ backgroundColor: "grey" }}
            isDarkModeEnabled={true}
            isVisible={isDatePickerVisible}
            mode="datetime"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </Modal>
      </TouchableWithoutFeedback>

      <FlatList
        data={goals}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => (
          <GoalCard item={item} showModalHandler={showModalHandler} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.7)",
    alignItems: "center",
    justifyContent: "center"
  },
  modalContainer: {
    height: "60%",
    width: 355,
    borderRadius: 10,
    backgroundColor: "black",
    //color: "white",
    // borderColor: "red",
    // borderWidth: 2,
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15
  },
  reminderDueDateContainer: {
    flexDirection: "row",
    width: "100%",

    justifyContent: "space-around"
  },
  reminderDueDateItemContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  white: {
    color: "#fff"
  }
});

export default ProfileScreen;
