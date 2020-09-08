import React, {useState} from 'react';
import {View, Text, StyleSheet, Button, TextInput, Alert} from 'react-native';

import {Header} from '../components/Header';

// Reggie's globo used Async storage from **'react-native'**, which is now deprecated. Eexist some subtle differences
import AsyncStorage from '@react-native-community/async-storage';

export const Signup = () => {
  const [loggedInUser, setLoggedInUser] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [messagesReAsyncStorage, setMessagesReAsyncStorage] = useState(
    '(messages re AsyncStorage)',
  );

  const LogMeIn = () => {
    setLoggedInUser('Nitsuj');
  };

  const signMeUp = () => {
    if (username === '' || password === '') {
      setMessagesReAsyncStorage('username and password must be non-empty');
    } else {
      AsyncStorage.getItem(username, (_err, result) => {
        if (result !== null) {
          setMessagesReAsyncStorage('This username is already in use');
        } else {
          AsyncStorage.setItem(username, password);
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
    // // // console.log(keys);
    // example console.log result:
    // ['@MyApp_user', '@MyApp_key']
  };

  return (
    <View>
      <Header />
      <Text style={styles.userBox}>
        Current user: {loggedInUser ? loggedInUser : 'none'}
      </Text>
      <Text style={styles.log}>hi from Signup</Text>
      <Button title="Log in as Nitsuj" onPress={LogMeIn} />

      <View style={styles.signUp}>
        <Text>
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
    </View>
  );
};

const styles = StyleSheet.create({
  log: {
    color: 'orange',
  },
  userBox: {
    textAlign: 'right',
    paddingRight: 15,
    paddingTop: 10,
    fontWeight: '800',
  },
  signUp: {
    marginLeft: 15,
    marginRight: 15,
    borderColor: 'black',
    borderWidth: 1,
  },
  input: {
    marginBottom: 6,
    marginLeft: 4,
    marginRight: 4,
    borderColor: 'grey',
    borderWidth: 1,
  },
  message: {color: 'purple'},
});
