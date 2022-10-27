import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';

export class Cards extends Component {
  render() {
    return (
      <View style={styles.card}>
        <View style={styles.card1}>
          <Text style={styles.cardText}>SERVICES</Text>
          <Text style={styles.cardTextTwo}>5 services</Text>
          <View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>VIEW DETAILS</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card1}>
          <Text style={styles.cardText}>MONEY</Text>
          <Text style={styles.cardTextTwo}>₹....</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>SHOW BALANCE</Text>
          </TouchableOpacity>
        </View>
      </View>
      
    );
  }
}

export default Cards;

const styles = StyleSheet.create({
  card: {
    // backgroundColor:"red",
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  card1: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    // justifyContent:"space-between"
  },
  cardText: {
    fontSize: 11,
    color: 'grey',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardTextTwo: {
    fontSize: 15,
    fontWeight: '500',
  },
  button: {
    marginTop: 50,
    borderRadius: 5,
    padding: 10,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    // alignItems:"center"
  },
});
