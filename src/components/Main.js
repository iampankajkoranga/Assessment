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
  }
  
 








});

export default Main;
