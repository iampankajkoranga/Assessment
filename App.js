import {Text, View} from 'react-native';
import React, {Component} from 'react';
import Main from './src/components/Main';
// import Services from './src/components/Services';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {Image,StyleSheet} from "react-native"

const Tab = createBottomTabNavigator();

export class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
              tabBarLabel:"Home",
              headerShown: false
          
            // tabBarIcon: ({color, size}) => (
            //   // <Image
            //   //   source={require('./images/home.png')}
             
            //   // />
            // ),
          }}
          name="airtel"
          component={Main}
        />
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}

export default App