import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {Header} from '../components/Header';

export const Home = ({navigation}) => {
  const navigateMe = () => navigation.navigate('createAccount');

  return (
    <View>
      <Header />
      <Text style={styles.home}>Hello from Home</Text>
      <Button
        style={styles.button}
        title="Sign up, or Log in "
        onPress={navigateMe}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    marginTop: 130,
    backgroundColor: 'lightblue',
  },
});
