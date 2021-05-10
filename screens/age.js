import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground} from 'react-native';
import Constants from 'expo-constants';
import { SearchBar, ListItem, Input } from 'react-native-elements';
import MyHeader from '../components/MyHeader';
const image1 = {uri: '../assets/PI.jpg'}


export default class Age extends React.Component {

  constructor(){
    super();
    this.state={
      d:'',
      p: [],
      o: false
    }
    this.q = null
    this.o = false
  }

 Calculate = () => {
    var c=[1,4,1,5,9,2,6,5,3,5,8,9,7,9,3,2,3,8,4,6,2,6,4,3,3,8,3,2,7,9,5,0,2,8,8,4,1,9,7,1,6,9,3,9,9,3,7,5,1,0,5,8,2,0,9,7,4,9,4,4,5,9,2,3,0,7,8,1,6,4,0,6,2,8,6,2,0,8,9,9,8,6,2,8,0,3,4,8,2,5,3,4,2,1,1,7,0,6,7,9,8,2,1,4,8,0,8,6,5,1,3,2,8,2,3,0,6,6,4,7,0,9,3,8,4,4,6,0,9,5,5,0,5,8,2,2,3,1,7,2,5,3,5,9,4,0,8,1,2,8,4,8,1,1,1,7,4,5,0,2,8,4,1,0,2,7,0,1,9,3,8,5,2,1,1,0,5,5,5,9,6,4,4,6,2,2,9,4,8,9,5,4,9,3,0,3,8,1,9,6,4,4,2,8,8,1,0,9,7,5,6,6,5,9,3,3,4,4,6,12,8,4,7,5,6,4,8,2,3,3,7,8,6,7,8,3,1,6,5,2,7,1,2,0,1,9,0,9,1,4,5,6,4,8,5,6,6,9,2,3,4,6,0,3,4,8,6,1,0,4,5,4,3,2,6,6,4,8,2,1,3,3,9,3,6,0,7,2,6,0,2,4,9,1,4,1,2,7,3,7,2,4,5,8,7,0,0,6,6,0,6,3,1,5,5,8,8,1,7,4,8,8,1,5,2,0,9,2,0,9,6,2,8,2,9,2,5,4,0,9,1,7,1,5,3,6,4,3,6,7,8,9,2,5,9,0,3,6,0,0,1,1,3,3,0,5,3,0,5,4,8,8,2,0,4,6,6,5,2,1,3,8,4,1,4,6,9,5,1,9,4,1,5,1,1,6,0,9,4,3,3,0,5,7,2,7,0,3,6,5,7,5,9,5,9,1,9,5,3,0,9,2,1,8,6,1,1,7,3,8,1,9,3,2,6,1,1,7,9,3,1,0,5,1,1,8,5,4,8,0,7,4,4,6,2,3,7,9,9,6,2,7,4,9,5,6,7,3,5,1,8,8,5,7,5,2,7,2,4,8,9,1,2,2,7,9,3,8,1,8,3,0,1,1,9,4,9,1,2]
    
   
    

   console.log(c)
    var day = this.state.d;
    var a = day;

    for (var i = 0; i < c.length; i++) {
      
      if (
        c[i] == a[0] &&
        c[i + 1] == a[1]
      ) 
       {
        var w = i;
        this.o = true;
        this.q = w;
        break;
      } else {
        this.o = false;
        this.q = null;
      }
    }
  };

 render(){


  

  return (
    
    <View style={{flex:1}}>
      <MyHeader title="MY PI" navigation={this.props.navigation} />
    <View style={styles.container}>
                <ImageBackground source={require('../assets/PI.jpg')} style={{flex:1, justifyContent: 'center', resizeMode:'cover'}}>
      <Text style={styles.paragraph}>
        Enter your Age
      </Text>
      <Input 
        style={styles.formTextInput}
        containerStyle={{ marginTop: 30 }}
        label={''}
            inputStyle = {{color: 'white'}}
        placeholder={' Your Age (It accepts exactly 2 digits )'}
        maxLength ={2}
        keyboardType={'numeric'}
        onChangeText={(text) => {
        this.setState({
          d:text
        })
        }}
        value={this.state.d}
      />
     
    <TouchableOpacity
      style={styles.button}
      onPress={() => {
        this.Calculate();
        this.props.navigation.navigate('Results',{p: this.q, status:this.o})

      }}> 
      <Text style={{color:'black', fontSize: 30}}>Submit</Text>
    </TouchableOpacity> 
  </ImageBackground>  
    </View>
    </View> 
   
  );
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
    marginTop: 24,
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
    button: {
    width: '75%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf:'center',
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: 20,
  },
});
