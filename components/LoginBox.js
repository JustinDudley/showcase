import {useIsFocused} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {theme} from '../helpers/theme';
import AsyncStorage from '@react-native-community/async-storage';
import {constants} from '../helpers/constants.js';

export const LoginBox = () => {
  const isFocused = useIsFocused(); // usage below causes useEffect to fire when navigated to from createAccount
  const [loggedInUser, setLoggedInUser] = useState('Marmaduke');

  const LogoutUser = () => {
    setLoggedInUser('none');
    try {
      AsyncStorage.setItem(constants.LOGGED_IN_USER, 'none');
    } catch (e) {
      Alert.alert('error: ', e);
    }
  };

  useEffect(() => {
    const getUserFromAsyncStorage = async () => {
      try {
        const user = await AsyncStorage.getItem(constants.LOGGED_IN_USER);
        setLoggedInUser(user);
      } catch (e) {
        Alert.alert('error: ', e);
      }
    };
    getUserFromAsyncStorage();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{loggedInUser}</Text>
      <TouchableHighlight onPress={LogoutUser} underlayColor="lightblue">
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
  name: {
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
