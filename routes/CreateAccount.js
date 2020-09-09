import React, {useState, Fragment} from 'react';
import {View, Text, StyleSheet, Button, TextInput, Alert} from 'react-native';

import {Header} from '../components/Header';
import {constants} from '../helpers/constants.js';

// Reggie's globo used Async storage from **'react-native'**, which is now deprecated. Eexist some subtle differences
import AsyncStorage from '@react-native-community/async-storage';

console.log(constants.LOGGED_IN_USER);

export const CreateAccount = ({navigation}) => {
  const [existingUsername, setExistingUsername] = useState('');
  const [existingPassword, setExistingPassword] = useState('');
  const [messagesReRegister, setMessagesReRegister] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [messagesReLogin, setMessagesReLogin] = useState('');

  const loginUser = async () => {
    if (newUsername === '' || newPassword === '') {
      setMessagesReLogin('please enter a username and password');
    } else {
      const storedPassword = await AsyncStorage.getItem(newUsername);
      if (storedPassword !== newPassword) {
        setMessagesReLogin("That username/password combination didn't work");
      } else {
        AsyncStorage.setItem(constants.LOGGED_IN_USER, newUsername);
        setMessagesReLogin('');
        navigation.navigate('home');
      }
    }
  };

  const signMeUp = () => {
    if (existingUsername === '' || existingPassword === '') {
      setMessagesReRegister('username and password must be non-empty');
    } else {
      AsyncStorage.getItem(existingUsername, (_err, result) => {
        if (result !== null) {
          setMessagesReRegister('This username is already in use');
        } else {
          AsyncStorage.setItem(existingUsername, existingPassword);
          AsyncStorage.setItem(constants.LOGGED_IN_USER, existingUsername);
          setMessagesReRegister('');
          navigation.navigate('home');
        }
      });
    }
  };

  const getAllKeys = async () => {
    let keys = [];
    try {
      keys = await JSON.stringify(AsyncStorage.getAllKeys());
    } catch (e) {
      Alert.alert('error: ', e);
    }
    Alert.alert(keys);
  };

  const getLoggedInUserValue = async () => {
    let user = '';
    try {
      user = await AsyncStorage.getItem(constants.LOGGED_IN_USER);
      Alert.alert(user ? user : 'null');
    } catch (e) {}
  };

  return (
    <Fragment>
      <Header navigation={navigation} />

      <View style={styles.box}>
        <Text style={styles.instructions}>
          To login, please enter your username and password below.
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setNewUsername(text)}
          placeholder="username"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setNewPassword(text)}
          placeholder="password"
          secureTextEntry={true}
        />
        <Button title="Log in" onPress={loginUser} />
        <Text style={styles.message}>{messagesReLogin}</Text>
      </View>

      <View>
        <View style={styles.box}>
          <Text style={styles.instructions}>
            No account? Register below. Your userame and password will be stored
            in AsyncStorage, and you will be automatically logged in.
          </Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setExistingUsername(text)}
            placeholder="Enter Userame"
          />
          <TextInput
            style={styles.input}
            onChangeText={(text) => setExistingPassword(text)}
            placeholder="Enter Password"
            secureTextEntry="true"
          />
          <Button title="GO" onPress={signMeUp} />
        </View>

        <Text style={styles.message}>{messagesReRegister}</Text>
        <Button
          title="click to see what's in AsyncStorage"
          onPress={getAllKeys}
        />
        <Button
          title="click to see the value of loggedInUser"
          onPress={getLoggedInUserValue}
        />
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  userBox: {
    textAlign: 'right',
    paddingRight: 15,
    paddingTop: 10,
    fontWeight: '800',
  },
  box: {
    marginTop: 50,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 25,
    borderColor: 'black',
    borderWidth: 1,
  },
  instructions: {
    padding: 10,
    paddingBottom: 30,
  },
  input: {
    marginBottom: 8,
    marginLeft: 8,
    marginRight: 8,
    padding: 3,
    borderColor: 'grey',
    borderWidth: 1,
  },
  message: {
    color: 'red',
    marginLeft: 6,
    marginBottom: 10,
  },
});
