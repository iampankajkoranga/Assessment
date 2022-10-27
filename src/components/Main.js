import {ScrollView, Text, View, Image, StyleSheet,FlatList} from 'react-native';
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Services from './Services';
import Explore from './Explore';
import Cards from './Cards';
import FiveG from './FiveG';
import Banner from './banner';



// const arr = [
//   {
//     link: require('/Users/pankajsingh/Assignment/src/assets/router.png'),
//     Title: 'broadband',
//   },
//   {
//     link: require('/Users/pankajsingh/Assignment/src/assets/router.png'),
//     Title: 'prepaid',
//   },
//   {
//     link: require('/Users/pankajsingh/Assignment/src/assets/router.png'),
//     Title: 'postpaid',
//   },
//   {
//     link: require('/Users/pankajsingh/Assignment/src/assets/router.png'),
//     Title: 'airtel black',
//   },
//   {
//     link: require('/Users/pankajsingh/Assignment/src/assets/router.png'),
//     Title: 'DTH',
//   },
//   {
//     link: require('/Users/pankajsingh/Assignment/src/assets/router.png'),
//     Title: 'port to airtel',
//   },
//   {
//     link: require('/Users/pankajsingh/Assignment/src/assets/router.png'),
//     Title: 'security camera',
//   },
//   {
//     link: require('/Users/pankajsingh/Assignment/src/assets/router.png'),
//     Title: 'entertainment',
//   },
// ];


export class Main extends Component {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.head}>
            <Image
              style={styles.image}
              source={require('/Users/pankajsingh/Assignment/src/assets/userr.png')}
            />
            <Text style={styles.headerText}>Manage</Text>
            <Image
              style={styles.image}
              source={require('/Users/pankajsingh/Assignment/src/assets/bell.png')}
            />
          </View>
        <Cards></Cards>
        <FiveG></FiveG>
        <Banner></Banner>
        <Services></Services>
        <Explore></Explore>
        

          {/* </View> */}
         

           

          {/* </View> */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  head: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    // backgroundColor:"red"
  },
  headerText: {
    padding: 15,
    fontWeight: 'bold',
  },
  image: {
    height: 42,
    width: 42,
    borderWidth: 0.5,
    // backgroundColor:"grey",
    borderRadius: 50,
  },
  Logo: {
    height: 35,
    width: 35,
    backgroundColor: 'grey',
    borderRadius: 50,
    // marginRight: 45,
  },
  Logo2: {
    height: 35,
    width: 35,
    backgroundColor: 'grey',
    borderRadius: 50,
    marginRight: 45,
  },
  headerTwo: {
    borderBottomWidth: 5,
    borderBottomColor: 'grey',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    marginHorizontal: 20,
    // flexDirection:"row"
  },
  shortcurtText: {
    fontSize: 9,
    color: 'grey',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  textUnder: {
    fontSize: 10,
    marginBottom: 8,
    marginTop: 4,
    // alignItems:"center",
    // flexDirection:""
    // position:"absolute",
  },

  logos1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 10,
  },
  logos2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',

    // justifyContent:"flex-start",
  },
  logosServices: {
    flexDirection:"column"
    // padding:2
  },
  service: {
    padding: 15,
    backgroundColor: 'white',
    marginHorizontal: 20,
    borderRadius: 20,
   
    // justifyContent:"space-between"
  },
  services: {
    // borderRadius: 20,
    // backgroundColor:"white",
    // marginHorizontal: 8,
    // padding: 15,
    // // padding:20,
    flexDirection:"row",
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },





});

export default Main;
