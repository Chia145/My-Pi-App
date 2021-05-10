import React, { Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import { DrawerItems} from 'react-navigation-drawer'


export default class CustomSideBarMenu extends Component{
  render(){
    return(
      <View style={{flex:1, }}>
      <Text style={styles.paragraph}> Find your position in the PI in... </Text>
      <View style={{color: 'white'}}>
        <View style={styles.drawerItemsContainer}>
          <DrawerItems {...this.props}/>
        </View>
        </View>
        </View>
    )
  }
}

var styles = StyleSheet.create({
  drawerItemsContainer:{
    flex:1
  },
   paragraph: {
   // margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    backgroundColor:'black'
  }
})
