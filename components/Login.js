import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {theme} from '../helpers/theme';
import AsyncStorage from '@react-native-community/async-storage';

export const Login = () => {
  const LOGGED_IN_USER = 'loggedInUser';
  const [loggedInUser, setLoggedInUser] = useState('marduke');
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  const ShowAnAlert = () => {
    Alert.alert('Logout Button pressed');
  };

  useEffect(() => {
    // const googleExample = async () => {
    //   const user = AsyncStorage.getItem(LOGGED_IN_USER);
    //   setLoggedInUser(JSON.stringify(user));
    // };
    // googleExample();

    const getUser = async () => {
      try {
        const user = await AsyncStorage.getItem(LOGGED_IN_USER);
        setLoggedInUser(user);
        console.log('hello from inside getUser');
      } catch (e) {
        Alert.alert('error: ', e);
      }
    };
    getUser();
  });

  return (
    <View style={styles.container}>
      {/* <Text style={styles.username}>Sam</Text> */}
      <Text style={styles.username}>{loggedInUser}</Text>
      <TouchableHighlight onPress={ShowAnAlert}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 15,
    paddingBottom: 5,
    paddingRight: 15,
    minWidth: 120,
    textAlign: 'right',
  },
  username: {
    textAlign: 'right',
    color: theme.colors.coloradoColumbineDark,
    fontWeight: '900',
    fontSize: 20,
  },
  logout: {
    textAlign: 'right',
    color: theme.colors.coloradoColumbineDark,
    fontWeight: '300',
    fontSize: 20,
  },
});
