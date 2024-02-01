import { View, Text, TouchableOpacity, ImageBackground,TextInput, Button, StyleSheet, Platform, ScrollView, KeyboardAvoidingView } from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { useNavigation } from '@react-navigation/native';



const EditProfile = () => {
    const navigation = useNavigation();

    return (
        <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'android' ? -100 : 'height'}
    >
        <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={{ margin: 20 }}></View>


      <View style={styles.container}>
        <View style={{ margin: 20 }}>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  height: 100,
                  width: 100,
                  borderRadius: 15,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ImageBackground
                  source={require('../assets/Gwapo.png')}
                  style={{ height: 100, width: 100 }}
                  imageStyle={{ borderRadius: 15 }}
                >
                  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <Icon
                      name="camera"
                      size={35}
                      color="#fff"
                      style={{
                        opacity: 0.7,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: '#fff',
                        borderRadius: 10,
                      }}
                    />
                  </View>
                </ImageBackground>
              </View>
            </TouchableOpacity>
                
                <Text style={{marginTop: 10, fontSize: 18, fontWeight: 'bold'}}> Edelcris Khien Sajot</Text>

          </View>

            <View style={styles.action}>
                <FontAwesomeIcon name='user-o' size={20}/>
                    <TextInput
                        placeholder='First Name'
                        placeholderTextColor='#666666'
                        style={styles.textInput}
                    
                    />
            </View>
            <View style={styles.action}>
                <FontAwesomeIcon name='user-o' size={20}/>
                    <TextInput
                        placeholder='Last Name'
                        placeholderTextColor='#666666'
                        style={styles.textInput}
                    
                    />
            </View>
            <View style={styles.action}>
                <FeatherIcon name='phone' size={20}/>
                    <TextInput
                        placeholder='Phone'
                        placeholderTextColor='#666666'
                        keyboardType='number-pad'
                        style={styles.textInput}
                    
                    />
            </View>
            <View style={styles.action}>
                <FontAwesomeIcon name='envelope-o' size={20}/>
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor='#666666'
                        keyboardType='email-address'
                        style={styles.textInput}
                    
                    />
            </View>
            <View style={styles.action}>
                <FontAwesomeIcon name='globe' size={20}/>
                    <TextInput
                        placeholder='Country'
                        placeholderTextColor='#666666'
                        style={styles.textInput}
                    
                    />
            </View>
            <View style={styles.action}>
                <Icon name='map-marker-outline' size={20}/>
                    <TextInput
                        placeholder='City'
                        placeholderTextColor='#666666'
                        style={styles.textInput}
                    
                    />
            </View>
            <TouchableOpacity style={styles.commandButton} onPress={() =>  navigation.navigate('Profile')}>
                <Text style={styles.panelButtonTitle}>
                    Submit
                </Text>

            </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
      </KeyboardAvoidingView>

    );
  };
  

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    scrollContainer: {
        flexGrow: 2,
        justifyContent: 'space-between',
      },
    commandButton: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        marginTop: 10,
    },
    panel:{
        padding: 20,
        backgroundColor: '#FFFFFF',
        paddingTop: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 5,
        shadowOpacity: 0.4,

    },
    header: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#333333',
        shadowOffset: {width: -1, height: -3},
        shadowRadius: 2,
        shadowOpacity: 0.4,
        elevation: 5,
        paddingTop: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    panelHeader: {
        alignItems: 'center',
    },
    panelHandle:{
        width: 40,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#00000040',
        marginBottom: 10,
    },
    panelTitle:{
        fontSize: 27,
        height: 35,
    },
    panelSubtitle:{
        fontSize: 14,
        color: 'grey',
        height: 30,
        marginBottom: 10,
    },
    panelButton:{
        padding: 13,
        borderRadius: 10,
        backgroundColor: '#FF6347',
        alignItems: 'center',
        marginVertical: 7,
    },
    panelButtonTitle:{
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    actionError:{
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5,
    },
    textInput:{
        flex: 1,
        marginTop: Platform.OS === 'android' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
});

export default EditProfile;
