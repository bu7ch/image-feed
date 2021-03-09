import { StatusBar } from 'expo-status-bar';
import React,  { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardList from './components/CardList';

const items = [
  {id: '200', author: 'Bob Ross'},
  {id: '690', author: 'Chuck Norris'},

]
export default class App extends Component{
render() {
  return (
  <View style={styles.container}>
    <CardList items={items}/>
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
});
