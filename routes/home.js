import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

import {Header} from '../components/Header';

export const Home = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />
      <View style={styles.home}>
        <Button
          title="Create account"
          onPress={() => navigation.navigate('account')}
        />
      </View>
      <View>
        <Button
          title="check out the notable data!"
          onPress={() => navigation.navigate('displayBios')}
        />
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
