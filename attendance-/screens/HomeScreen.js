import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />
        <TouchableOpacity style={ss.bt}>
          <Text>PRESENT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ss.bt}>
          <Text>PRESENT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ss.bt}>
          <Text>PRESENT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={ss.bt}>
          <Text>PRESENT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderColor: 'green',
            width: 200,
            height: 50,
            backgroundColor: 'cyan',
            borderRadius: 100,
            marginTop: 60,
            marginLeft: 70,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const ss = StyleSheet.create({
  bt: {
    borderColor: 'green',
    width: 150,
    height: 40,
    backgroundColor: 'green',
    borderRadius: 200,
    marginTop: 30,
    marginLeft: 90,
    justifyContent: 'center',
    alignItems: 'center',
  },
});