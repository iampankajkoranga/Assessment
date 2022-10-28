import {Text, View, Image, StyleSheet, FlatList} from 'react-native';
import React, {Component} from 'react';

export class Explore extends Component {
  render() {
    return (
      //   <View style={styles.exp}>
      //     <View style={styles.exp1}>
      //     <Image
      //         //   style={styles.expimage}
      //           source={require('/Users/pankajsingh/Assignment/src/assets/case.png')}
      //         />
      //         <Image
      //           style={styles.expimage}
      //           source={require('/Users/pankajsingh/Assignment/src/assets/arrow1.png')}
      //         />

      //     </View>
      //     <View>
      //         <Text></Text>
      //     </View>
      //     <View  style={styles.exp2}>
      //     <Image
      //           style={styles.image}
      //           source={require('/Users/pankajsingh/Assignment/src/assets/case.png')}
      //         />
      //         <Image
      //           style={styles.image}
      //           source={require('/Users/pankajsingh/Assignment/src/assets/arrow1.png')}
      //         />

      //     </View>k

      //   </View>
      <View style={styles.expMain}>
        <View style={styles.exp}>
          <Image
            style={styles.expimage}
            source={require('/Users/pankajsingh/Assignment/src/assets/case.png')}
          />
          <Image
            style={styles.expimage}
            source={require('/Users/pankajsingh/Assignment/src/assets/arrow1.png')}
          />
        </View>
        <View>
          {/* <Text style={styles.text1}>travel the world with airtel</Text> */}
          {/* <Text style={styles.text2}>explore international roaming packs</Text> */}
        </View>
        <View style={styles.exp2}>
          <Image
            style={styles.expimage}
            source={require('/Users/pankajsingh/Assignment/src/assets/case.png')}
          />
          <Image
            style={styles.expimage}
            source={require('/Users/pankajsingh/Assignment/src/assets/arrow1.png')}
          />
        </View>
        <View>
            {/* <Text>15 OTT in one app</Text> */}
        </View>
      </View>
    );
  }
}

export default Explore;

const styles = StyleSheet.create({
  exp: {
    flex: 1,
    flexDirection: 'row',
    borderRadius:10,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    // width:500
    marginHorizontal:20
  },
  //   exp1:{
  //       flex:1,
  //     //   flexDirection:"row",
  //       borderRadius:10,
  //       // backgroundColor:"white",
  //     //   justifyContent:'space-between',
  //         // backgroundColor:"red",

  //      

  //   },
  exp2: {
    flex: 1,
    flexDirection: 'row',
    borderRadius:10,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    // width:500
 
  },
  expMain: {
    // backgroundColor: 'red',
    flexDirection:"row",
    // justifyContent:"space-between"
  },

  text1: {
    fontSize: 15,

    marginBottom: 10,
  },
  text2: {
    fontSize: 11,
    color: 'grey',
  },
});
