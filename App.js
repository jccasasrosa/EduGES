import React, { useState, Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppBarInf from './components/nav_bar_inferior';
import AppBarSup from './components/nav_bar_superior';
import Home from './components/home';
import Guardias from './components/guardias';
import Reservas from './components/reservas';
import SettingsScreen from './components/ajustes';
import LoginScreen from './components/login_components';
import Notificaciones from './components/notificaciones';
import Finalizar_dia from './components/finalizar_dia';
import NotificarAusencia from './components/notificar_ausencia'

export default class App extends Component {
  state = {
    vistaActual: 'Home',
    vistaAnterior: 'Home',
    login: true,
    titulo: 'Centro Jabalcuz'
  }

  cambiaVista = (numVista) => {
    this.setState({
      vistaAnterior: this.state.vistaActual,
      vistaActual: numVista
    })
  }

  actualizaLogin = (nuevoValor) => {
    this.setState({
      login: nuevoValor
    })
  }

  actualizaTitulo = (nuevoTit) => {
    this.setState({
      titulo: nuevoTit
    })
  }

  render() {
    const PilaNav = createNativeStackNavigator();

    return (
      <View style={styles.container}>
        <NavigationContainer>
          {!this.state.login && <AppBarSup titulo = {this.state.titulo} cambiaTitulo = {this.actualizaTitulo} />}
          <PilaNav.Navigator
            screenOptions={{
              headerShown: false,
              //animation: ((this.state.vistaActual === 'Reservas' && this.state.vistaAnterior === 'Home') ? 'slide_from_left' : 'slide_from_left')
              animation: 'fade_from_bottom',
              gesturesEnabled: false,
              unmountOnBlur: true
            }}>
            <PilaNav.Screen name="Login" component={LoginScreen} initialParams={{ login: this.state.login, actualizaLogin: this.actualizaLogin, cambiaTitulo: this.actualizaTitulo, cambiaVista: this.cambiaVista }}/>
            <PilaNav.Screen name="Home" component={Home}/>
            <PilaNav.Screen name="Guardias" component={Guardias} />
            <PilaNav.Screen name="Reservas" component={Reservas} />
            <PilaNav.Screen name="Notificaciones" component={Notificaciones} />
            <PilaNav.Screen name="Finalizar_dia" component={Finalizar_dia} />
            <PilaNav.Screen name="NotificarAusencia" component={NotificarAusencia} />
            <PilaNav.Screen name="Ajustes" component={SettingsScreen} initialParams={{ login: this.state.login, actualizaLogin: this.actualizaLogin }}/>
          </PilaNav.Navigator>
          {!this.state.login && <AppBarInf vista = {this.state.vistaActual} cambiaVista = {this.cambiaVista} cambiaTitulo = {this.actualizaTitulo} />}
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

//export default App;
