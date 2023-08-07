import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HCards = () => {
  return (
    <View style={styles.mainContainer}>
      <Text>HCards</Text>
    </View>
  );
};

export default HCards;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
