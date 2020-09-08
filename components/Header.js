import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Login} from './Login';

export const Header = () => {
  return (
    <View>
      <Text style={styles.header}>hello from header</Text>
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
  },
});
