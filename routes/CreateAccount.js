import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput, Alert} from 'react-native';

import {Header} from '../components/Header';
import {constants} from '../helpers/constants.js';

// Reggie's globo used Async storage from **'react-native'**, which is now deprecated. Eexist some subtle differences
import AsyncStorage from '@react-native-community/async-storage';

console.log(constants.LOGGED_IN_USER);

export const CreateAccount = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [messagesReAsyncStorage, setMessagesReAsyncStorage] = useState('');

  const signMeUp = () => {
    if (username === '' || password === '') {
      setMessagesReAsyncStorage('username and password must be non-empty');
    } else {
      AsyncStorage.getItem(username, (_err, result) => {
        if (result !== null) {
          setMessagesReAsyncStorage('This username is already in use');
        } else {
          AsyncStorage.setItem(username, password);
          AsyncStorage.setItem(constants.LOGGED_IN_USER, username);
          setMessagesReAsyncStorage('');
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
      // read key error
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
    <View>
      <Header />
      <View style={styles.createAccount}>
        <Text style={styles.instructions}>
          No account? Sign in below and your userame and password will be stored
          in AsyncStorage.
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setUsername(text)}
          placeholder="Enter Userame"
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
          placeholder="Enter Password"
          secureTextEntry="true"
        />
        <Button title="GO" onPress={signMeUp} />
      </View>
      <Text>
        'username: ' {username}, 'password: ', {password}
      </Text>
      <Text style={styles.message}>{messagesReAsyncStorage}</Text>
      <Button
        title="click to see what's in AsyncStorage"
        onPress={getAllKeys}
      />
      <Button
        title="click to see the value of loggedInUser"
        onPress={getLoggedInUserValue}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  userBox: {
    textAlign: 'right',
    paddingRight: 15,
    paddingTop: 10,
    fontWeight: '800',
  },
  createAccount: {
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
  message: {color: 'purple'},
});
