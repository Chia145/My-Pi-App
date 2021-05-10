import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import { SearchBar, ListItem, Input } from 'react-native-elements';

import { createAppContainer, createSwitchNavigator,} from 'react-navigation';
import { AppDrawerNavigator } from './components/AppDrawerNavigator';
import {A} from './components/StackNavigator';
import Bday from './screens/bday';
import Age from './screens/age';
import Random from './screens/random'


export default function App() {
  return (
    <AppContainer/>
    
  );
}


const switchNavigator = createSwitchNavigator({
  Drawer:{screen: AppDrawerNavigator},
  A: {screen: A}
})

const AppContainer =  createAppContainer(switchNavigator);
