import * as React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen'

export default class App extends React.Component {
  render() {
    return (
      <View>   
      <HomeScreen/> 
     </View>
    );
  }
}

