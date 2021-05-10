import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import CustomSideBarMenu  from './CustomSideBarMenu';
import Bday from '../screens/bday';
import Age from '../screens/age';
import Random from '../screens/random'

export const AppDrawerNavigator = createDrawerNavigator({
  Bday : {
    screen : Bday
    },
  Age : { 
    screen: Age
  },  
  Random : { 
    screen: Random
  },  
  },
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Bday'
  })
