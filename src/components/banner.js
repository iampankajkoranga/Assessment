import {
    Text,
    View,
    Image,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ScrollView,
  } from 'react-native';
import React, { Component } from 'react'

export class Banner extends Component {
  render() {
    return (
        <ScrollView
        horizontal={true}>
            <View style={styles.images}>
         <Image
              style={styles.image}
              source={require('/Users/pankajsingh/Assignment/src/assets/banner.jpeg')}
            />
         <Image
              style={styles.image}
              source={require('/Users/pankajsingh/Assignment/src/assets/banner.jpeg')}
            />
       
      </View>

        </ScrollView>
      
    )
  }
}

export default Banner
const styles=({
    images:{
        flexDirection:"row"

    },
    image:{
        marginHorizontal:20,
        height:100,
        width:300,
        marginBottom:20,
        borderRadius:10
        
    }

})