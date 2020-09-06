import 'react-native-gesture-handler';

import * as React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <View>
        <Text>Hello</Text>
      </View>
    </NavigationContainer>
  );
};

export default App;
