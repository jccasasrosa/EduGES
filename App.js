import React, { useState, Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppBarInf from './components/nav_bar_inferior';
import AppBarSup from './components/nav_bar_superior';
import Home from './components/home';
import Guardias from './components/guardias';
import Reservas from './components/reservas';

export default class App extends Component {
  state = {
    vistaActual: 'Home',
    vistaAnterior: 'Home'
  }
  
  cambiaVista = (numVista) => {
    this.setState({
      vistaAnterior: this.state.vistaActual,
      vistaActual: numVista
    })
  }

  render() {
    const PilaNav = createNativeStackNavigator();

    return (
      <View style={styles.container}>
        <AppBarSup />
        <NavigationContainer>
          <PilaNav.Navigator
            screenOptions={{
              headerShown: false,
              //animation: ((this.state.vistaActual === 'Reservas' && this.state.vistaAnterior === 'Home') ? 'slide_from_left' : 'slide_from_left')
              animation: 'fade_from_bottom'
            }}>
            <PilaNav.Screen name="Home" component={Home}/>
            <PilaNav.Screen name="Guardias" component={Guardias} />
            <PilaNav.Screen name="Reservas" component={Reservas} />
          </PilaNav.Navigator>
          <AppBarInf vista = {this.state.vistaActual} cambiaVista = {this.cambiaVista} />
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    justifyContent: 'center',
  },
});

//export default App;
