import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BurgerMenu from '../components/BurgerMenu';

const AnotherComponent = () => {
  // Define your list of featured items
  const featuredItems = [
    { id: 1, title: 'Featured Item 1' },
    // Add more items as needed
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.username}>Hello</Text>
        <Text style={styles.greetings}>Welcome to HamloyApp</Text>

        <View style={styles.contentContainer}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor="#8B8B8B"
            />
            <TouchableOpacity style={styles.sortIconContainer}>
              <Ionicons name="ios-options" style={styles.sortIcon} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Featured Events</Text>
          {/* Render the list of featured items */}
          {featuredItems.map(item => (
            <View key={item.id} style={styles.featuredItem}>
              <Text style={styles.featuredItemTitle}>{item.title}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>View All Events</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: 'white',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  header: {
    padding: 20,
    marginTop: '10%',
    backgroundColor: 'black',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    height: 250,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 30,
    color: 'white',
  },
  greetings: {
    fontSize: 16,
    marginBottom: 15,
    marginTop: -7,
    color: 'white',
  },
  contentContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  searchContainer: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 10,
    marginRight: 10,
    backgroundColor: 'white',
  },
  sortIconContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 15,
  },
  sortIcon: {
    fontSize: 24,
    color: 'black',
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  featuredItem: {
    backgroundColor: 'black',
    width: '100%',
    aspectRatio: 1,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  featuredItemTitle: {
    fontSize: 16,
    color: 'black',
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
});

export default AnotherComponent;
