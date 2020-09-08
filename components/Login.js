import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {theme} from '../helpers/theme';

export const Login = () => {
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);

  const ShowAnAlert = () => {
    Alert.alert('Logout Button pressed');
  };

  //   useEffect(Alert.alert('called from UseEffect'));

  return (
    <View style={styles.container}>
      <Text style={styles.username}>(username here)</Text>
      <TouchableHighlight onPress={ShowAnAlert}>
        <Text style={styles.logout}>Logout</Text>
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 15,
    paddingBottom: 5,
    paddingRight: 15,
    minWidth: 120,
    textAlign: 'right',
  },
  username: {
    textAlign: 'right',
    color: theme.colors.coloradoColumbineDark,
    fontWeight: '900',
    fontSize: 20,
  },
  logout: {
    textAlign: 'right',
    color: theme.colors.coloradoColumbineDark,
    fontWeight: '300',
    fontSize: 20,
  },
});
