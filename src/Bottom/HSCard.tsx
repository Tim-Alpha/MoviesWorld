/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Image, Text, View, FlatList} from 'react-native';

const HSCards = (props: {headTitle: string; Data: ArrayLike<any>}) => {
  const [data, setData] = useState(props.Data);

  useEffect(() => {}, []);

  return (
    <View>
      <Text style={styles.headerTxt}>{props.headTitle}</Text>
      <View>
        <FlatList
          horizontal={true}
          style={styles.mainContainer}
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({item}) => (
            <View style={styles.cardContainer}>
              <Image style={styles.img} source={item.img} />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginStart: 5,
    marginEnd: 5,
    flexDirection: 'row',
  },
  headerTxt: {
    fontSize: 20,
    color: '#000',
    marginTop: 10,
    marginStart: 5,
    fontWeight: 'bold',
  },
  cardContainer: {
    width: 130,
    height: 150,
    backgroundColor: '#0ff',
    marginTop: 2,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  img: {
    width: 130,
    height: 150,
    resizeMode: 'stretch',
    borderRadius: 6,
  },
});

export default HSCards;
