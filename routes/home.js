import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import {Header} from '../components/Header';

export const Home = ({navigation}) => {
  return (
    <View>
      <Header />
      <Text style={styles.home}>Hello from Home</Text>
      <Button
        style={styles.button}
        title="Sign up, or Log in "
        onPress={() => {
          navigation.navigate('signup');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    marginTop: 30,
    backgroundColor: 'lightblue',
  },
});
