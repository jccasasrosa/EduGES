import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import ListaMateria from './lista_elementos-horario';
import { useNavigation } from '@react-navigation/native';

const tit_guardias = "Guardias previstas";
const lista_guardias = [["Hoy", "08:30", "2ºA"],["Hoy", "13:30", "3ºB"],["Mañana", "12:30", "1ºA"]];

export default function Guardias() {
  const navigation = useNavigation();

  const vistaNotificarAusencia = () => {
    navigation.reset({
        index: 0,
        routes: [{ name: 'NotificarAusencia' }],
    });

    console.log(navigation); 
    navigation.navigate('NotificarAusencia');
  }

  return (
    <View style={styles.vistaScroll}>
        <View style={styles.container}>
          <ListaMateria lista = {lista_guardias} tit = {tit_guardias}/>
        </View>
        <View style={styles.bottomSide}>
          <TouchableOpacity style={styles.boton}  onPress={vistaNotificarAusencia}>
            <Text style={styles.textBoton}>Notificar ausencia</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      //paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    boton: {
      borderRadius: 40,
      borderWidth: 1,
      borderColor: '#FC5555',
      padding: 18,
      marginTop: 15,
      marginBottom: 120,
      backgroundColor: '#FC5555',
      alignSelf: 'center',
      width: '80%',
    },
    textBoton: {
      textAlign: "center",
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20,
    },
    vistaScroll: {
      flex: 1,
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    bottomSide: {
      alignSelf: 'flex-end',
      width: '100%',
    }
});