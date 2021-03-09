import { StatusBar } from 'expo-status-bar';
import React,  { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Feed from './components/screens/Feed';

const items = [
  {id: '200', author: 'Bob Ross'},
  {id: '690', author: 'Chuck Norris'},

]
export default class App extends Component{
render() {
  return (
  <View style={styles.container}>
    <Feed style={styles.feed}/>
    <StatusBar style='light' translucent={false} />
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
  feed: {
    flex:1
  }
});
