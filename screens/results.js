import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import Constants from 'expo-constants';
import { SearchBar, ListItem, Input } from 'react-native-elements';
import MyHeader from '../components/MyHeader';
import { Card } from 'react-native-paper';


export default class Results extends React.Component {

  constructor(props){
    super(props);
    this.state={
    position: this.props.navigation.getParam('p')+1,
    s: this.props.navigation.getParam('status'),
    } 

  }


  render(){
      console.log(this.state.position)
    return(
      <View style={styles.container}>                
       <ImageBackground source={require('../assets/PI.jpg')} style={{flex:1, justifyContent: 'center', resizeMode:'cover'}}>
   
      <Text style={styles.paragraph}> Status : {this.state.s ? "Found" : "Not Found" } </Text>
      <Text style={styles.paragraph}> Position : {this.state.position != null ? this.state.position : "N/A" } </Text>
    
      </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
 //   marginTop: 24,
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    
  },
    
});
