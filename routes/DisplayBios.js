import React, {useEffect, useState} from 'react';

import {View, Text, Button, StyleSheet, Alert} from 'react-native';
import {theme} from '../helpers/theme';

export const DisplayBios = () => {
  const [data, setData] = useState({});

  // useEffect(() => {
  //   Alert.alert('useEffect is working');
  //   fetch('localhost3000')
  //     .then((res) => res.json)
  //     .then((jsonData) => setData(JSON.parse(jsonData)));
  // });
  console.log('pepper');
  console.log(
    require('../assets/data/db.json').notableData.pamReed.bio.toString(),
  );

  return (
    <View>
      <Text>hello from DisplayBios</Text>
      {/* <Button title="click to see all data" onPress={FetchData} /> */}
      {/* <Text>{data}</Text> */}
      <Text style={styles.text}>
        {require('../assets/data/db.json').notableData.pamReed.bio.toString()}{' '}
      </Text>
      <Text style={styles.note}>
        In future, I will make more of this page. Right now, I am grabbing data
        with 'require()'. I want to grab the data using a fetch call. In future
        I will set up a dev server using json-server. I may need to use ngrok
        too. In my project called Countdown, I did this successfully.
        dev/reactnative/pluralsight/hendrick/Countdown
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    margin: 7,
    marginTop: 30,
    color: theme.colors.coloradoColumbineDark,
  },
  note: {
    margin: 7,
    marginTop: 30,
  },
});
