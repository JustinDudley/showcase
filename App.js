import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const App: () => React$Node = () => {
  return (
    <View style={styles.FirstScreen}>
      <Text>He - llo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  FirstScreen: {
    flex: 1,
    marginTop: 50,
  },
});

export default App;
