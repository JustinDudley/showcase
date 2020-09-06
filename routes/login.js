import React, {useState} from 'react';

import {View, Text, StyleSheet, Button, Alert} from 'react-native';

export const Login = () => {
  const [loggedInUser, setLoggedInUser] = useState('');

  const LogMeIn = () => {
    setLoggedInUser('Nitsuj');
  };

  return (
    <View>
      <Text style={styles.userBox}>
        Current user: {loggedInUser ? loggedInUser : 'none'}
      </Text>
      <Text style={styles.log}>hi from login</Text>
      <Button title="Log in as Nitsuj" onPress={LogMeIn} />
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
});
