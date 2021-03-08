import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from './components/Avatar'

export default function App() {
  return (
  <Avatar initials= "RD" size={35} backgroundColor={'green'} 
  
  />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
