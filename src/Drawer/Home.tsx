import {StyleSheet, View} from 'react-native';
import React from 'react';
import BottomNavigator from '../Bottom/BottomNavigator';

const Home = () => {
  return (
    <View style={styles.container}>
      <BottomNavigator />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
