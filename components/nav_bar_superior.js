import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const AppBar = () => {
  return (
    <View style={styles.appBar}>
      <Text style={styles.title}>Mi aplicación</Text>
      <View style={styles.rightButtons}>
        <Button title="Opción 1" onPress={() => {}} />
        <Button title="Opción 2" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    height: 50,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  title: {
    fontSize: 18,
    color: '#fff'
  },
  rightButtons: {
    flexDirection: 'row'
  }
});

export default AppBar;
