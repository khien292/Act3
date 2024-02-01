import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const BurgerMenu = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();

  const toggleMenu = (e) => {
    e.stopPropagation();
    setMenuVisible(!isMenuVisible);
  };

  const icons = {
    Chat: 'ios-chatbubbles-outline',
  };

  const screenWidth = Dimensions.get('window').width;

  return (
      <View style={styles.root}>
        <View style={styles.menuButton}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.headerTitle}>
              Hamloy<Text style={styles.match}>App</Text>
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleMenu}>
            <Ionicons name="menu-outline" style={styles.menuIcon} />
          </TouchableOpacity>
        </View>
        
        {isMenuVisible && (
          <View style={[styles.menu, screenWidth < 600 && styles.menuSmallScreen]}>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <View style={styles.dropdownItem}>
                <Ionicons name="ios-settings-outline" style={styles.icon} />
                <Text style={styles.dropDown}>Settings</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
              <View style={styles.dropdownItem}>
                <Ionicons name="log-out-outline" style={styles.icon} />
                <Text style={styles.dropDown}>Log out</Text>
              </View>
            </TouchableOpacity>
          </View> 
        )}
      </View>
  );
};

const styles = {
  root: {
    flex: 1,
    marginTop: '10%',
    height: 'auto',
	  width:'auto',
  },
  menuButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white', 
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  headerTitle: {
    textAlign: 'left',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
 
  },
  match: {
    color: '#FF6666',
  },
  menuIcon: {
    fontSize: 40,
    color: '#FF6666',
  },
  menu: {
    backgroundColor: 'white',
    padding: 15,
    zIndex: 2,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
	
  },
  menuSmallScreen: {
    width: '100%',
    marginTop: -15,
  },
  icon: {
    fontSize: 24,
    marginRight: 10,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
};

export default BurgerMenu;
