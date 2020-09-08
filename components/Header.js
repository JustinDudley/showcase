import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {Login} from './Login';

export const Header = () => {
  return (
    <View>
      <Text style={styles.header}>hello from header</Text>
      <Image
        style={styles.image}
        source={require('../assets/images/three_notable_figures.png')}
      />
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
  },
  image: {
    width: 180,
    height: 77,
  },
});
