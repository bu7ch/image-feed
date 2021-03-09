import { StatusBar } from 'expo-status-bar';
import React,  { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './components/Card';

export default class App extends Component{
render() {
  return (
  <View style={styles.container}>
    <Card
    fullname={'Roro senseï'}
    linkText = {' Comments'}
    onPressLinkText={() => {
      console.log("presssed link!");
    }}
    image={{uri:'http://unsplash.it/600/600'}}
    />
    <StatusBar style='auto'/>
  </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent:'flex-start'
  },
});
