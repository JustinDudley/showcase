import React, {useEffect, useState} from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {theme} from '../helpers/theme';

export const DisplayBios = () => {
  const [data, setData] = useState({});

  // FIRST STAB AT USEEFFECT
  // useEffect(() => {
  //   Alert.alert('useEffect is working');
  //   fetch('localhost3000')
  //     .then((res) => res.json)
  //     .then((jsonData) => setData(JSON.parse(jsonData)));
  // });

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
        I will set up a dev server using json-server. (No need to use ngrok: I
        only did that with my Countdown expo project because my phone couldn't
        directly access port 3000 on my laptop). In my project called Countdown,
        I did this successfully. dev/reactnative/pluralsight/hendrick/Countdown
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
