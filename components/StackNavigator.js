import React from 'react';
import {createStackNavigator} from 'react-navigation-stack'
import Age from '../screens/age';
import Bday from '../screens/bday';
import Random from '../screens/random'
import Results from '../screens/results'

export const A = createStackNavigator({


  Bday : {screen:Bday, navigationOptions:{headerShown: false}},
  Age: {screen:Age, navigationOptions:{headerShown: false}},
  Random: {screen:Random, navigationOptions:{headerShown: false}},
  Results:{screen:Results}
  },
  { initialRouteName: 'Bday'}
)