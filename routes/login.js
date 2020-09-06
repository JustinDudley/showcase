import React, {useState} from 'react';

import {View, Text, StyleSheet, Button, Alert} from 'react-native';

export const Login = () => {
  const [loggedInUser, setLoggedInUser] = useState('initialized');

  const LogMeIn = () => {
    setLoggedInUser('Nitsuj');
  };

  return (
    <View>
      <Text style={styles.log}>hi from login</Text>
      <Button
        title="Press me to login.  The login name will Nitsuj"
        onPress={LogMeIn}
      />
      <Text>{loggedInUser}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  log: {
    color: 'orange',
  },
});
