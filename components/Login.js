import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Login = () => {
  return (
    <View>
      <Text style={styles.login}>user: ____</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    marginLeft: 60,
    color: 'green',
  },
});
