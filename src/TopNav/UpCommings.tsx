import {Text, View} from 'react-native';
import React, {useEffect} from 'react';

const UpCommings = () => {
  const upCommingMovies = async () => {
    const API_KEY = '7e842e62c4010afd1f6ffeb78fb3c112';
    let movie_Name = 'Flash';
    let URL = `https://api.themoviedb.org/3/search/movie?query=${movie_Name}&api_key=${API_KEY}`;
    let DATA = await fetch(URL);
    let finalData = await DATA.json();
    console.log(finalData);
  };
  useEffect(() => {
    upCommingMovies();
  }, []);

  return (
    <View>
      <Text>UpCommings</Text>
    </View>
  );
};

export default UpCommings;
