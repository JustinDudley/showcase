import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

export const Login = () => {
  return (
    <View>
      <Text style={styles.log}>hi from login</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  log: {
    color: 'orange',
  },
});
