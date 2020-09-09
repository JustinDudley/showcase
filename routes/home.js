import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {Header} from '../components/Header';

export const Home = ({navigation}) => {
  const navigateMe = () => navigation.navigate('createAccount');

  return (
    <View>
      <Header />
      <View style={styles.home}>
        <Button title="Create account" onPress={navigateMe} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    marginTop: 130,
    backgroundColor: 'lightblue',
  },
});
