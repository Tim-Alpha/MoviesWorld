import {StyleSheet, View} from 'react-native';
import React from 'react';
import Topnavigator from '../TopNav/Topnavigator';

const Movies = () => {
  return (
    <View style={styles.container}>
      <Topnavigator />
    </View>
  );
};

export default Movies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
