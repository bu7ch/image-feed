import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AuthorRow from './components/AuthorRow';

export default function App() {
  return (
  <View style={styles.container}>
    <AuthorRow 
    fullname={'Roro senseï'}
    linkText = {' Comments'}
    onPressLinkText={() => {
      console.log("presssed link!");
    }}
    />
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent:'flex-start'
  },
});
