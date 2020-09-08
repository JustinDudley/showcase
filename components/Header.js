import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

import {Login} from './Login';
import {theme} from '../helpers/theme';

export const Header = () => {
  return (
    <View>
      <Text style={styles.title}>Three Notable Figures</Text>
      <View style={styles.imageAndLoginContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/three_notable_figures.png')}
        />
        {/* <Text>hello</Text> */}
        <Login />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    backgroundColor: theme.colors.coloradoColumbineExtraLight,
    textAlign: 'center',
    fontWeight: '700',
    paddingTop: 3,
    paddingBottom: 3,
  },
  imageAndLoginContainer: {
    flexDirection: 'row',
  },
  image: {
    width: 180,
    height: 77,
  },
});
