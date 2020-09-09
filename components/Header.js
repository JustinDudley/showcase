import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';

import {LoginBox} from './LoginBox';
import {theme} from '../helpers/theme';

export const Header = ({navigation}) => {
  return (
    <View style={styles.viewWrapper}>
      <Text style={styles.title}>Three Notable Figures</Text>
      <View style={styles.imageAndLoginContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/three_notable_figures.png')}
        />
        {/* <Text>hello</Text> */}
        <LoginBox navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewWrapper: {},
  title: {
    backgroundColor: theme.colors.coloradoColumbineExtraLight,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
    paddingTop: 4,
    paddingBottom: 4,
    color: 'white',
  },
  imageAndLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 180,
    height: 77,
  },
});
