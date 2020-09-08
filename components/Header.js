import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {Login} from './Login';

export const Header = () => {
  return (
    <View>
      <Text style={styles.header}>hello from header</Text>
      <Image source={require('../assets/images/pam_reed.png')} />
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
  },
});
