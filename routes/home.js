import React from 'react';

import {View, Text, StyleSheet, Button} from 'react-native';

export const Home = ({navigation}) => {
  return (
    <View>
      <Text style={styles.home}>Hello from Home</Text>
      <Button
        title="press me"
        onPress={() => {
          navigation.navigate('login');
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
