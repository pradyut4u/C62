import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>ATTENDANCE </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: 'purple',
  },
  text:{
    color: 'red',
    padding: 45,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

export default AppHeader;