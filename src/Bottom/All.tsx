import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const All = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.searchTxt}>Search</Text>
        <TextInput style={styles.input} placeholder="what's in mind" />
        <Icon style={styles.iconSearch} name="search" size={40} color="#000" />
      </View>
    </View>
  );
};

export default All;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  inputContainer: {
    marginTop: 10,
    flexDirection: 'row',
    marginStart: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  searchTxt: {
    paddingVertical: 8,
    paddingHorizontal: 8,
    textAlign: 'center',
    fontSize: 16,
    color: '#000',
    marginRight: 5,
    borderRadius: 5,
    backgroundColor: '#ddd231',
  },
  iconSearch: {
    backgroundColor: '#ddd231',
    marginStart: 2,
    borderEndRadius: 6,
    paddingHorizontal: 5,
  },
  input: {
    width: '60%',
    height: 40,
    fontSize: 15,
    paddingStart: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#ddd',
  },
});
