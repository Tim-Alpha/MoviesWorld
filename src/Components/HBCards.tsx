/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  Animated,
  Easing,
} from 'react-native';

const HBCards = () => {
  const [data, setData] = useState([
    {
      name: 'Krish',
      img: require('../Images/krish.jpg'),
    },
    {
      name: 'RaOne',
      img: require('../Images/raone.jpg'),
    },
    {
      name: 'Robot',
      img: require('../Images/robot.jpeg'),
    },
    {
      name: 'Salt',
      img: require('../Images/salt.jpg'),
    },
  ]);

  const flatListRef = useRef(null);
  const scrollX = new Animated.Value(0);

  useEffect(() => {
    startScrolling();
  }, []);

  const startScrolling = () => {
    Animated.loop(
      Animated.timing(scrollX, {
        toValue: data.length * 355, // Adjust this value based on your data and item width
        duration: 2000, // Adjust the duration for each loop
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ).start();
  };

  return (
    <View>
      {/* <Text style={styles.headerTxt}>Movies</Text> */}
      <View>
        <FlatList
          ref={flatListRef}
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
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginStart: 5,
    marginEnd: 5,
    marginTop: 15,
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
    width: 355,
    height: 220,
    backgroundColor: '#0ff',
    marginTop: 2,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  img: {
    width: 355,
    height: 220,
    resizeMode: 'stretch',
    borderRadius: 6,
  },
});

export default HBCards;
