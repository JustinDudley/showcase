import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>user: ____</Text>
      <Text style={styles.loginText}>Logout</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 120,
    textAlign: 'right',
  },
  loginText: {
    textAlign: 'right',
  },
});
