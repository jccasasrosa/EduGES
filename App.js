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
import ItemReserva from './components/item_reserva';

export default function App() {

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
    const PilaNav = createNativeStackNavigator();
    const lista_recursos = [["Balones Fútbol", require('./assets/ball.png'), [{ id: 'Balones Fútbol', text: '09:00 - 10:00', state: false, tuya: false, seleccionada: false }, { id: 'Balones Fútbol', text: '10:00 - 11:00', state: true, tuya: false, seleccionada: false }, { id: 'Balones Fútbol', text: '11:00 - 12:00', state: false, tuya: false, seleccionada: false }, { id: 'Balones Fútbol', text: '12:00 - 13:00', state: false, tuya: false, seleccionada: false }, { id: 'Balones Fútbol', text: '13:00 - 14:00', state: false, tuya: false, seleccionada: false }, { id: 'Balones Fútbol', text: '14:00 - 15:00', state: false, tuya: false, seleccionada: false}]], 
                        ["Balones Medicinales", require('./assets/medicinalBall.png'), [{ id: 'Balones Medicinales', text: '09:00 - 10:00', state: false, tuya: false, seleccionada: false }, { id: 'Balones Medicinales', text: '10:00 - 11:00', state: false, tuya: false, seleccionada: false }, { id: 'Balones Medicinales', text: '11:00 - 12:00', state: false, tuya: false, seleccionada: false }, { id: 'Balones Medicinales', text: '12:00 - 13:00', state: false, tuya: false, seleccionada: false }, { id: 'Balones Medicinales', text: '13:00 - 14:00', state: false, tuya: false, seleccionada: false }, { id: 'Balones Medicinales', text: '14:00 - 15:00', state: false, tuya: false, seleccionada: false}]], 
                        ["Combas", require('./assets/cordes.png'), [{ id: 'Combas', text: '09:00 - 10:00', state: false, tuya: false, seleccionada: false }, { id: 'Combas', text: '10:00 - 11:00', state: true, tuya: false, seleccionada: false }, { id: 'Combas', text: '11:00 - 12:00', state: false, tuya: false, seleccionada: false }, { id: 'Combas', text: '12:00 - 13:00', state: false, tuya: false, seleccionada: false }, { id: 'Combas', text: '13:00 - 14:00', state: false, tuya: false, seleccionada: false }, { id: 'Combas', text: '14:00 - 15:00', state: false, tuya: false, seleccionada: false}]],
                        ["Pelotas Basket", require('./assets/basketBall.png'), [{ id: 'Pelotas Basket', text: '09:00 - 10:00', state: true, tuya: false, seleccionada: false }, { id: 'Pelotas Basket', text: '10:00 - 11:00', state: false, tuya: false, seleccionada: false }, { id: 'Pelotas Basket', text: '11:00 - 12:00', state: false, tuya: false, seleccionada: false }, { id: 'Pelotas Basket', text: '12:00 - 13:00', state: true, tuya: false, seleccionada: false }, { id: 'Pelotas Basket', text: '13:00 - 14:00', state: false, tuya: false, seleccionada: false }, { id: 'Pelotas Basket', text: '14:00 - 15:00', state: false, tuya: false, seleccionada: false}]]];

    const lista_instalaciones = [["Aula de Informática", require('./assets/screenPC.png'), [{ id: 'Aula de Informática', text: '09:00 - 10:00', state: false, tuya: false, seleccionada: false }, { id: 'Aula de Informática', text: '10:00 - 11:00', state: false, tuya: false, seleccionada: false }, { id: 'Aula de Informática', text: '11:00 - 12:00', state: false, tuya: true, seleccionada: false }, { id: 'Aula de Informática', text: '12:00 - 13:00', state: false, tuya: false, seleccionada: false }, { id: 'Aula de Informática', text: '13:00 - 14:00', state: false, tuya: true, seleccionada: false }, { id: 'Aula de Informática', text: '14:00 - 15:00', state: false, tuya: false, seleccionada: false}]],
                              ["Biblioteca", require('./assets/library.png'),[{ id: 'Biblioteca', text: '09:00 - 10:00', state: false, tuya: false, seleccionada: false }, { id: 'Biblioteca', text: '10:00 - 11:00', state: false, tuya: false, seleccionada: false }, { id: 'Biblioteca', text: '11:00 - 12:00', state: true, tuya: false, seleccionada: false }, { id: 'Biblioteca', text: '12:00 - 13:00', state: false, tuya: false, seleccionada: false }, { id: 'Biblioteca', text: '13:00 - 14:00', state: false, tuya: false, seleccionada: false }, { id: 'Biblioteca', text: '14:00 - 15:00', state: false, tuya: true, seleccionada: false}]],
                              ["Pabellón A", require('./assets/pitch.png'), [{ id: 'Pabellón A', text: '09:00 - 10:00', state: true, tuya: false, seleccionada: false }, { id: 'Pabellón A', text: '10:00 - 11:00', state: false, tuya: false, seleccionada: false }, { id: 'Pabellón A', text: '11:00 - 12:00', state: false, tuya: false, seleccionada: false }, { id: 'Pabellón A', text: '12:00 - 13:00', state: false, tuya: false, seleccionada: false }, { id: 'Pabellón A', text: '13:00 - 14:00', state: false, tuya: false, seleccionada: false }, { id: 'Pabellón A', text: '14:00 - 15:00', state: false, tuya: false, seleccionada: false}]],
                              ["Pabellón B", require('./assets/pitch.png'), [{ id: 'Pabellón B', text: '09:00 - 10:00', state: false, tuya: false, seleccionada: false }, { id: 'Pabellón B', text: '10:00 - 11:00', state: true, tuya: false, seleccionada: false }, { id: 'Pabellón B', text: '11:00 - 12:00', state: true, tuya: false, seleccionada: false }, { id: 'Pabellón B', text: '12:00 - 13:00', state: true, tuya: false, seleccionada: false }, { id: 'Pabellón B', text: '13:00 - 14:00', state: false, tuya: false, seleccionada: false }, { id: 'Pabellón B', text: '14:00 - 15:00', state: false, tuya: false, seleccionada: false}]]];

    const [lista_recurso_state, set_lista_recurso_state] = useState(lista_recursos);
    const [lista_instalacion_state, set_lista_instalacion_state] = useState(lista_instalaciones);
    const [login, setLogin] = useState(true);
    const [vistaActual, setVistaActual] = useState('Home');
    const [titulo, setTitulo] = useState('Centro Jabalcuz');

    return (
      <View style={styles.container}>
        <NavigationContainer>
          {!login && <AppBarSup titulo = {titulo} cambiaTitulo = {setTitulo} />}
          <PilaNav.Navigator
            screenOptions={{
              headerShown: false,
              //animation: ((this.state.vistaActual === 'Reservas' && this.state.vistaAnterior === 'Home') ? 'slide_from_left' : 'slide_from_left')
              animation: 'fade_from_bottom',
              gesturesEnabled: false,
              unmountOnBlur: true
            }}>
            <PilaNav.Screen name="Login" component={LoginScreen} initialParams={{ login: login, actualizaLogin: setLogin, cambiaTitulo: setTitulo, cambiaVista: setVistaActual }}/>
            <PilaNav.Screen name="Home" component={Home} initialParams={{ lista_instalaciones: lista_instalacion_state,  lista_recursos: lista_recurso_state }}/>
            <PilaNav.Screen name="Guardias" component={Guardias} />
            <PilaNav.Screen name="Reservas" component={Reservas} initialParams={{ lista_instalaciones: lista_instalacion_state,  lista_recursos: lista_recurso_state }} />
            <PilaNav.Screen name="Notificaciones" component={Notificaciones} />
            <PilaNav.Screen name="Finalizar_dia" component={Finalizar_dia} />
            <PilaNav.Screen name="NotificarAusencia" component={NotificarAusencia} />
            <PilaNav.Screen name="ItemReservas" component={ItemReserva} initialParams={{ lista_instalaciones: lista_instalacion_state,  lista_recursos: lista_recurso_state, set_lista_recursos: set_lista_recurso_state, set_lista_instalaciones: set_lista_instalacion_state }} />
            <PilaNav.Screen name="Ajustes" component={SettingsScreen} initialParams={{ login: login, actualizaLogin: setLogin }}/>
          </PilaNav.Navigator>
          {!login && <AppBarInf vista = {vistaActual} cambiaVista = {setVistaActual} cambiaTitulo = {setTitulo} />}
        </NavigationContainer>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

//export default App;
