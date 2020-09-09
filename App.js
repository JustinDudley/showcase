import 'react-native-gesture-handler';

import * as React from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Home} from './routes/Home.js';
import {Account} from './routes/Account';
import {DisplayBios} from './routes/DisplayBios.js';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen
          name="home"
          component={Home}
          // options={{headerShown: false}}
        />
        <Stack.Screen name="account" component={Account} />
        <Stack.Screen name="displayBios" component={DisplayBios} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
