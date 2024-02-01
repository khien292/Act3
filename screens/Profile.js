import React from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';
import {Avatar, Title, Caption, Text, TouchableRipple} from 'react-native-paper';
import BurgerMenu from '../components/BurgerMenu';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useNavigation } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons, AntDesign } from '@expo/vector-icons';



export default function Profile() {
  const navigation = useNavigation();
  return (
    
    <SafeAreaView>
      <ScrollView>



    <View style={styles.container}>
      <View style={styles.userInfoSection2}>
        <View style={{flexDirection: 'row', marginTop: 15 }}>
            <Avatar.Image
              source={require('../assets/Gwapo.png'
              )}
              size={70}
            
            />
            <View style={{marginLeft: 20,}}>
              <Title style={styles.title}>
                Edelcris Khien Sajot
              </Title>
              <Caption style={styles.caption}>
                @Malouyuntasisir@pleaselang.sir
              </Caption>
            </View>
        </View>
      </View>
    </View>

    <View style={styles.userInfoSection}>
      <View style={styles.row}>
        <Icon name='map-marker-radius' size={20}/>
        <Text style={{marginLeft: 10}}>
          Cagayan de Oro, Philippines
        </Text>
      </View>

      <View style={styles.row}>
        <Icon name='phone' size={20}/>
        <Text style={{marginLeft: 10}}>
          0922 imuha nang pito
        </Text>
      </View>

      <View style={styles.row}>
        <Icon name='email' size={20}/>
        <Text style={{marginLeft: 10}}>
          @Malouyuntasisir@pleaselang.sir
        </Text>
      </View>


    </View>

    <View style={styles.infoBoxWrapper}>
        <View style={styles.infoBox}>
          <Title>3rd Year</Title>
          <Caption>Year Level</Caption>
        </View>

        <View style={styles.infoBox}>
          <Title>BSIT</Title>
          <Caption>Course/Program</Caption>
        </View>


    </View>

    <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {} }>
          <View style={styles.menuItem}>
            <Icon name='account-question' color="black" size={25}/>
            <Text style={styles.menuItemText}>About Me</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {} }>
          <View style={styles.menuItem}>
            <Icon name='thumb-up' color="black" size={25}/>
            <Text style={styles.menuItemText}>Likes and Hobbies</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {} }>
          <View style={styles.menuItem}>
          <AntDesign name="questioncircle" size={25} color="black" />
            <Text style={styles.menuItemText}>Life Status</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {} }>
          <View style={styles.menuItem}>
            <Ionicons name='settings' color="black" size={25}/>
            <Text style={styles.menuItemText}>Settings </Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {
            navigation.dispatch(
              CommonActions.reset({
                index: 0,
                  routes: [{ name: 'Welcome' }],
            })
          );
        }}>       
          <View style={styles.menuItem}>
            <Icon name='logout' color="black" size={25}/>
            <Text style={styles.menuItemText}>Logout</Text>
          </View>
        </TouchableRipple>
        

    </View>
    

    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  userInfoSection2:{
    paddingHorizontal: 30,
    marginBottom: 25,
    
  },
  userInfoSection:{
    paddingHorizontal: 30,
    marginBottom: 25,
    marginTop: 20,
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15, 
    marginBottom: 5,
    color: 'white',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightColor: '#dddddd',
    borderRightWidth: 1,
  },
  menu: {
    marginTop: -50,
  },
  menuWrapper:{
    marginTop: 10,

  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },




})