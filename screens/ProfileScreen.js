import React, { useState, useEffect } from "react";
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

import Icon from "react-native-vector-icons/Ionicons";

import GoalCard from "../components/GoalCard";

import * as Calendar from "expo-calendar";

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

  useEffect(() => {
    (async () => {
      Calendar.getDefaultCalendarAsync().then(item => console.log(item));
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === "granted") {
        const calendars = await Calendar.getCalendarsAsync();
        const defaultCalendarSource =
          Platform.OS === "ios"
            ? await Calendar.getDefaultCalendarAsync()
            : { isLocalAccount: true, name: "Expo Calender" };
        console.log(defaultCalendarSource);
        const newCalendarID = await Calendar.createCalendarAsync({
          title: "Expo Calendar",
          color: "purple",
          entityType: Calendar.EntityTypes.EVENT,
          sourceId: defaultCalendarSource.id,
          source: defaultCalendarSource,
          name: "internalCalendarName",
          ownerAccount: "personal",
          accessLevel: Calendar.CalendarAccessLevel.OWNER
        });
        // console.log(`Your new calendar ID is: ${newCalendarID}`);
        // const calendarIDs = [];
        // calendars.forEach(calendarItem => calendarIDs.push(calendarItem.id));

        // Calendar.getEventsAsync(
        //   calendarIDs,
        //   new Date("2020-01-01T00:00:00"),
        //   new Date("2020-02-02T00:00:00")
        // ).then(ev => {});
      }
    })();
  }, []);

  const showModalHandler = itemID => {
    setShowModal(showModal => !showModal);
    setChosenGoalID(itemID);
  };

  const showReminderModalHandler = () => {
    setShowReminderModal(showReminderModal => !showReminderModal);
  };

  const showDueDateCalendarHandler = () => {
    setShowDueDateCalendarModal(showDueDateCalendar => !showDueDateCalendar);
  };

  return (
    <View style={styles.screen}>
      <TouchableWithoutFeedback onPress={showModalHandler}>
        <Modal animationType="slide" transparent={true} visible={showModal}>
          <View style={styles.modal}>
            <View style={styles.modalContainer}>
              <TouchableHighlight onPress={showModalHandler}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
              <Text>{chosenGoalID}</Text>
              <View style={styles.reminderDueDateContainer}>
                <TouchableWithoutFeedback onPress={showReminderModalHandler}>
                  <View style={styles.reminderDueDateItemContainer}>
                    <Icon name="ios-timer" size={25} />
                    <Text>Set Reminder</Text>
                  </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={showDueDateCalendarHandler}>
                  <View style={styles.reminderDueDateItemContainer}>
                    <Icon name="ios-calendar" size={25} />
                    <Text>Set Due Date</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={false}
          ></Modal>
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
    width: 330,
    backgroundColor: "purple",
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
  }
});

export default ProfileScreen;
