import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { Component } from 'react'

export class FiveG extends Component {
  render() {
    return (
      <View style={styles.five}>
            <Image style={styles.logo} source={require('/Users/pankajsingh/Assignment/src/assets/5g.webp')}/>
            <Text style={styles.logoText}>Check if your phone is 5G enabled</Text>
            <Image  source={require('/Users/pankajsingh/Assignment/src/assets/arrow1.png')}/>
        </View>
    )
  }
}

export default FiveG

const styles=StyleSheet.create({
  five:{
    flexDirection:'row',
    backgroundColor:'rgb(255,255,255)',
    height:54,
    marginHorizontal:24,
    borderRadius:20,
    alignItems:'center',
    justifyContent:'space-around',
    paddingHorizontal:10
},
logo:{
    width:75,
    height:49
},

logoText:{
    fontSize:12.5
},
})