import React, { useState } from 'react';
import { View, Pressable, StyleSheet, Text, PixelRatio, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import 'moment/locale/es';

const fontScale = PixelRatio.getPixelSizeForLayoutSize(6.5);
const fontScaleBotones = PixelRatio.getPixelSizeForLayoutSize(7.0);

const buttons = [
  {
    text: 'Vetanas cerradas',
    state: false,
  },
  {
    text: 'Persianas bajadas',
    state: false,
  },
  {
    text: 'Ordenadores apagados',
    state: false,
  },
  {
    text: 'Luces apagadas',
    state: false,
  }
]

const Finalizar_dia = () => {
  const navigation = useNavigation();
  const [activeButtons, setActiveButtons] = useState(buttons);
  const [additionalButton, setAdditionalButton] = useState(false);

  const handlePress = (buttonNumber) => {
    let aux = [...activeButtons];
    aux[buttonNumber].state = !aux[buttonNumber].state;
    setActiveButtons(aux);

    setAdditionalButton(true);
    aux.map((item, index) => {
      if (item.state === false) {
        setAdditionalButton(false);
      }
    });
  };

  const vistaHome = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });

    let aux = [...activeButtons];
    aux.map((item, index) => {
      item.state = false;
    });
    setActiveButtons(aux);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textFecha}>{moment(new Date()).format('DD MMM YYYY')} - 1ºA </Text>
      {buttons.map((item, index) => (
        <Pressable
          key={index}
          onPress={() => handlePress(index)}
          style={[
            activeButtons[index].state ? styles.activatedButton : styles.deactivatedButton,
          ]}>
          <Text style={styles.buttonText}>{item.text}</Text>
        </Pressable>
      ))}
      <TouchableOpacity
        style={[
          styles.buttonConfirmarDesactivado,
          additionalButton ? styles.buttonConfirmarActivado : styles.buttonConfirmarDesactivado,
        ]}
        onPress={vistaHome}
        disabled={!additionalButton}>
        <Text style={[
          styles.confirmarButtonTextDeactivated,
          additionalButton ? styles.confirmarButtonTextActivated : styles.confirmarButtonTextDeactivated,
        ]}
          disabled={!additionalButton}>Confirmar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonObservaciones}>
        <Text style={styles.observacionesButtonText}>Observaciones</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    alignItems: 'center',
    top: 20,
  },
  buttonConfirmarActivado: {
    top: '4%',
    width: '80%',
    borderWidth: 2,
    borderColor: '#2abbf5',
    borderRadius: 10,
    padding: 5,
    marginTop: 10,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  buttonConfirmarDesactivado: {
    top: '4%',
    width: '80%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#A0A1A2',
    padding: 5,
    marginTop: 10,
    backgroundColor: '#A0A1A2',
    alignSelf: 'center',
  },
  buttonObservaciones: {
    top: '6%',
    width: '80%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FC5555',
    padding: 5,
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  activatedButton: {
    alignSelf: 'center',
    top: 15,
    width: '90%',
    margin: 3,
    marginBottom: 8,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: fontScale,
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: '#9bf765',
    flexDirection: 'row',
    bottom: 15,
    justifyContent: 'flex-start',
    borderColor: 'gray',
  },
  deactivatedButton: {
    alignSelf: 'center',
    top: 15,
    width: '90%',
    margin: 3,
    marginBottom: 8,
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    fontSize: fontScale,
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    bottom: 15,
    justifyContent: 'flex-start',
    borderColor: 'gray'
  },
  buttonText: {
    fontSize: fontScale,
    color: 'black',
    padding: 10,
    paddingTop: 15,
    paddingBottom: 15,
  },
  confirmarButtonTextDeactivated: {
    alignSelf: 'center',
    fontSize: fontScaleBotones,
    color: '#cfcfcf',
    padding: 10,
    fontWeight: 'bold',
  },
  confirmarButtonTextActivated: {
    alignSelf: 'center',
    fontSize: fontScaleBotones,
    color: '#2abbf5',
    fontWeight: 'bold',
  },
  observacionesButtonText: {
    alignSelf: 'center',
    fontSize: fontScaleBotones,
    color: 'red',
    padding: 10,
    fontWeight: 'bold',
  },
  textFecha: {
    textAlign: "left",
    borderColor: 'gray',
    fontSize: fontScale,
    marginLeft: 10,
    width: '90%',
    color: '#47525E',
  }
});

export default Finalizar_dia;
