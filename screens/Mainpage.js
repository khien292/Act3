import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useIsFocused } from '@react-navigation/native';
import { Entypo, Ionicons, MaterialIcons, FontAwesome5, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import Home from './Home';
import Notifications from './Notifications';
import CalendarEvents from './CalendarEvents'; 
import TodoList from './TodoList';
import Profile from './Profile';
import EditProfile from './EditProfile';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Define ProfileStack before using it
const ProfileStack = ({ navigation }) => {
  const isFocused = useIsFocused();
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#F5F5F5',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
      }}
    >
      <Stack.Screen
        name='Profile'
        component={Profile}
        options={{
          title: '',
          headerRight: () => (
            <MaterialCommunityIcons.Button
              name='account-edit'
              size={30}
              backgroundColor='#F5F5F5'
              color="black"
              onPress={() => navigation.navigate('EditProfile')}
            />
          ),
        }}
      />
      <Stack.Screen
        name='EditProfile'
        component={EditProfile}
        options={{
          title: 'Edit Profile',
        }}
      />
    </Stack.Navigator>
  );
};

const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: "#fff"
  },
};

export default function Mainpage() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Entypo name="home" size={24} color={focused ? "#FF6666" : "black"} />
              <Text style={{ fontSize: 12, color: "#16247d" }}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Ionicons name="notifications" size={24} color={focused ? "#FF6666" : "#111"} />
              <Text style={{ fontSize: 12, color: "#16247d" }}>Notifications</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="CalendarEvents"
        component={CalendarEvents}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <MaterialIcons name="event" size={24} color={focused ? "#FF6666" : "#111"} />
              <Text style={{ fontSize: 12, color: "#16247d" }}>Calendar</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="TodoList"
        component={TodoList}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <FontAwesome5 name="clipboard-list" size={24} color={focused ? "#FF6666" : "#111"} />
              <Text style={{ fontSize: 12, color: "#16247d" }}>TodoList</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
              <FontAwesome name="user" size={24} color={focused ? "#FF6666" : "#111"} />
              <Text style={{ fontSize: 12, color: "#16247d" }}>Profile</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
