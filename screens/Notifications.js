import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import logo from '../assets/logo.png';

const Notifications = () => {
  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.notifications}>Notifications</Text>
      </View>
      <View style={styles.root}>
        <View style={styles.line2} />
        <View style={styles.notif}>
          <View style={styles.Image}>
            <Image source={logo} style={styles.logo} resizeMode="contain" />
          </View>
          <View style={styles.text}>
            <Text>
              Welcome to HamloyApp, we are happy to see you. Please read on our terms and conditions{' '}
            </Text>
            <Text style={{ color: '#8B8B8B' }}>01/03/2024</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.notif}>
          <View style={styles.Image}>
            <Image source={logo} style={styles.logo} resizeMode="contain" />
          </View>
          <View style={styles.text}>
            <Text>
              You have an event on January 27, 2024.{' '}
            </Text>
            <Text style={{ color: '#8B8B8B' }}>01/03/2024</Text>
          </View>
        </View>
        <View style={styles.line} />
        <View style={styles.notif}>
          <View style={styles.Image}>
            <Image source={logo} style={styles.logo} resizeMode="contain" />
          </View>
          <View style={styles.text}>
            <Text>
              You have a class (Software Engineering) on January 27, 2024 at 8:00AM.{' '}
            </Text>
            <Text style={{ color: '#8B8B8B' }}>01/03/2024</Text>
          </View>
        </View>
        <View style={styles.line} />
      </View>
    </ScrollView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: '10%',
  },
  notif: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5%',
    marginLeft: 0,
    marginTop: -20,
    width: '100%',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#8B8B8B',
    width: '100%',
    margin: '3%',
    marginTop: -10,
    marginLeft: 0,
  },
  Image: {
    flexBasis: '25%',
  },
  text: {
    flexBasis: '75%',
  },
  logo: {
    height: 80,
    width: 80,
    borderRadius: 400 / 2,
  },
  notifications: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 22,
    marginTop: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIcon: {
    marginLeft: "50%",
    marginTop: 60,
  },
});
