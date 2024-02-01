import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';

export default function CalendarEvents() {
  const [selectedDates, setSelectedDates] = useState([]);

  const handleDayPress = (date) => {
    console.log(date);
    const updatedDates = [...selectedDates];

    if (updatedDates.includes(date.dateString)) {
      // Remove date if already selected
      updatedDates.splice(updatedDates.indexOf(date.dateString), 1);
    } else {
      // Add date if not selected
      updatedDates.push(date.dateString);
    }

    setSelectedDates(updatedDates.sort());
  };

  const getStatusForDate = (date) => {
    // Check if the date is selected
    if (selectedDates.includes(date)) {
      return 'Present';
    }
  
    // Check if the date is not selected, then consider it as Absent
    return 'Absent';
  };
  
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.titlecontainer}>
        <Text style={styles.title}>Calendar</Text>
        <Text style={styles.subtitle}>Attendance and Schedule tracking</Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.calendarcontainer}>
          <Calendar
            style={styles.design}
            onDayPress={handleDayPress}
            markedDates={selectedDates.reduce((obj, date) => {
              obj[date] = { selected: true, selectedColor: 'blue' };
              return obj;
            }, {})}
          />
        </View>
        {selectedDates.map((date) => (
          <View key={date} style={styles.selectedDatesContainer}>
            <Text style={styles.selectedDatesText}>
              Selected Date: {date} - Status: {getStatusForDate(date)}
            </Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  scrollContainer: {
    paddingTop: '70%', // Adjust this value as needed
  },
  calendarcontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    marginTop: -250,
  },
  design: {
    borderRadius: 10,
    elevation: 4,
    width: 350, // Set the width of the calendar
    alignSelf: 'center', // Center the calendar horizontally
  },
  titlecontainer: {
    backgroundColor: 'black',
    height: 180, // Set a fixed height for the titleContainer
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    padding: 20,
    marginTop: '11%',
  },
  subtitle: {
    fontSize: 15,
    color: 'white',
    marginTop: -29,
    padding: 22,
  },
  selectedDatesContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    marginTop: 20,
    alignSelf: 'center',
  },
  selectedDatesText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
});
