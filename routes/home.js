import React from 'react';

import {View, Text, StyleSheet, Button} from 'react-native';

export const Home = ({navigation}) => {
  return (
    <View>
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
