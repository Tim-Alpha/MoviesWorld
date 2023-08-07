import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Movies from './Movies';
import WebSeries from './WebSeries';
import Favourite from './Favourite';
import All from './All';

const MatrialBottom = createMaterialBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <MatrialBottom.Navigator>
      <MatrialBottom.Screen name="All" component={All} />
      <MatrialBottom.Screen name="Movies" component={Movies} />
      <MatrialBottom.Screen name="WebSeries" component={WebSeries} />
      <MatrialBottom.Screen name="Favourite" component={Favourite} />
    </MatrialBottom.Navigator>
  );
};

export default BottomNavigator;
