import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

const AppBar = () => {
  return (
    <View style={styles.appBar}>
      <Button
        title="Página 1"
        onPress={() => alert('Navegando a la página 1')}
      />
      <Button
        title="Página 2"
        onPress={() => alert('Navegando a la página 2')}
      />
      <Button
        title="Página 3"
        onPress={() => alert('Navegando a la página 3')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    height: 50,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0
  }
});

export default AppBar;