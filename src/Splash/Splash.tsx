/* eslint-disable react-hooks/exhaustive-deps */
import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Parent');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Splash</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EA1179',
  },
  txt: {
    fontSize: 40,
  },
});
