import React from 'react'
import { View, Text, StyleSheet, ScrollView} from 'react-native'
import BurgerMenu from '../components/BurgerMenu'

export default function Settings() {
  return (
    <ScrollView>
      <BurgerMenu/>

    <View style={styles.header}>
    <Text style={styles.title}>
        Settings
    </Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  title: {
    fontSize: 24,
  }




})