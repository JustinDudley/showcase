import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const Home: React.FC = () => {
  return (
    <View>
      <Text style={styles.home}>Hello from Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  home: {
    marginTop: 30,
    backgroundColor: 'blue',
  },
});
