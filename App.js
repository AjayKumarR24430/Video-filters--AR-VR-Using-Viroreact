
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, YellowBox } from 'react-native';
import Icecream from './Icecream';
import ViroSample from './ViroSample';

// const RootStack = createStackNavigator(
//     {
//       Home: { screen: ViroSample },
//       Icecream: { screen: Icecream},
//     },
//     {
//         initialRouteName: 'Home',
//     }
    
//     );

    export default class App extends Component {
        render() {
          return <ViroSample/> ;
        }
      }