import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, View, Text, TextInput, TouchableOpacity, Pressable, Image, ScrollView } from 'react-native'
import React from 'react'
import Task from '../components/Task';

const Home = ({ navigation }) => {
  const [task, setTask] = useState('');
  const [taskItems, setTaskItems] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss(); 
    setTaskItems([...taskItems, task]);
    setTask('');
  }

  const completeTask = (index) => {
    let completedTask = taskItems[index];
    setCompletedTasks([...completedTasks, completedTask]);

    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <View style={styles.container}>
      {/* Today's task */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}> Today's task</Text>

        {/* Search for tasks */}
        <View style={styles.searchTaskWrapper}>
          <TextInput style={styles.input} placeholder={'Search for tasks'}/>
        </View>
        <ScrollView>
        <View style={styles.items}>
          {/* This is where the task will go */}
          {taskItems.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task text={item} />
            </TouchableOpacity>
          ))}
        </View>
        </ScrollView>
      </View>


      {/* Write a Task*/}
      <KeyboardAvoidingView
        behavior={Platform.OS === "android" ? "padding": "height"} 
        enabled={true}
        keyboardVerticalOffset={-195}
        style={styles.writeTaskWrapper}
      >
        <TextInput
          style={styles.input2}
          placeholder={'Write a task'}
          value={task}
          onChangeText={text => setTask(text)}
        />

        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6F6F6',
      },
      tasksWrapper: {
        paddingTop: 75,
        paddingHorizontal: 31,
        
      },
      sectionTitle: {
        fontSize: 26,
        fontWeight: 'bold',
      },
    
    
    
      searchTaskWrapper: {
        top: 15,
        left: 4,
        width: '100%',
      },
    
      input: {
        paddingVertical: 11,
        paddingHorizontal: 22,
        backgroundColor: '#EFEEEE',
        borderRadius: 11,
        width: 320,
      },
      items: {
        marginTop:50,
      },
    
    
    
      writeTaskWrapper: {
        position: 'absolute',
        bottom: 80,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        left: 25,
      },
      input2: {
        paddingVertical: 11,
        paddingHorizontal: 22,
        backgroundColor: '#EFEEEE',
        borderRadius: 20,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 320,
      },
      addWrapper: {
        width: 62,
        height: 58,
        backgroundColor: 'black',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        right: 50,
      },
      addText: {
        color: '#FFF',
        fontSize: 55,
        bottom: 10,
      },
});

export default Home;