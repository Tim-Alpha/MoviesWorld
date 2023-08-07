import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import OnAir from './OnAir';
import UpCommings from './UpCommings';
import Popular from './Popular';

const Top = createMaterialTopTabNavigator();

const Topnavigator = () => {
  return (
    <Top.Navigator>
      <Top.Screen name="OnAir" component={OnAir} />
      <Top.Screen name="Popular" component={Popular} />
      <Top.Screen name="UpCommings" component={UpCommings} />
    </Top.Navigator>
  );
};

export default Topnavigator;
