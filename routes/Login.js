import React, {useState} from 'react';

import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [messageText, setMessageText] = useState('oyster');

  const loginUser = async () => {
    Alert.alert('login presses');
    if (username === '' || password === '') {
      setMessageText('please enter a username and password');
    } else {
      const storedPassword = await AsyncStorage.getItem(username);
    }
  };

  return (
    <View>
      <Text style={styles.instructions}>
        Please enter your username and password below
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setUsername(text)}
        placeholder="username"
      />
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPassword(text)}
        placeholder="password"
        secureTextEntry={true}
      />
      <Button title="Log in" onPress={loginUser} />
      <Text style={styles.message}>{messageText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  instructions: {
    margin: 6,
    marginTop: 25,
  },
  input: {
    margin: 6,
    borderColor: 'black',
    borderWidth: 1,
    padding: 3,
    paddingTop: 8,
    paddingBottom: 8,
  },
  message: {
    color: 'red',
    marginLeft: 6,
  },
});
