import React, { useState } from 'react';
import { View, Pressable, StyleSheet, Text, PixelRatio, TouchableOpacity } from 'react-native';

const fontScale = PixelRatio.getPixelSizeForLayoutSize(6.5);
const fontScaleBotones = PixelRatio.getPixelSizeForLayoutSize(7.0);

const App = () => {
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [button4, setButton4] = useState(false);
  const [additionalButton, setAdditionalButton] = useState(false);

  const handlePress = (buttonNumber) => {
    const updatedButton1 = buttonNumber === 1 ? !button1 : button1;
    const updatedButton2 = buttonNumber === 2 ? !button2 : button2;
    const updatedButton3 = buttonNumber === 3 ? !button3 : button3;
    const updatedButton4 = buttonNumber === 4 ? !button4 : button4;
    const updatedAdditionalButton = updatedButton1 && updatedButton2 && updatedButton3 && updatedButton4;

    setButton1(updatedButton1);
    setButton2(updatedButton2);
    setButton3(updatedButton3);
    setButton4(updatedButton4);
    setAdditionalButton(updatedAdditionalButton);
  };

  return (
    <View style={styles.container}>
    <Text style={styles.textFecha}>31 oct. 2022 - 1ºA </Text>
      <Pressable
        onPress={() => handlePress(1)}
        style={[
          styles.button,
          button1 ? styles.activatedButton : styles.deactivatedButton,
        ]}>
        <Text style={styles.buttonText}>Ventanas cerradas</Text>
      </Pressable>
      <Pressable
        onPress={() => handlePress(2)}
        style={[
          styles.button,
          button2 ? styles.activatedButton : styles.deactivatedButton,
        ]}>
        <Text style={styles.buttonText}>Persianas bajadas</Text>
      </Pressable>
      <Pressable
        onPress={() => handlePress(3)}
        style={[
          styles.button,
          button3 ? styles.activatedButton : styles.deactivatedButton,
        ]}>
        <Text style={styles.buttonText}>Ordenadores apagados</Text>
      </Pressable>
      <Pressable
        onPress={() => handlePress(4)}
        style={[
          styles.button,
          button4 ? styles.activatedButton : styles.deactivatedButton,
        ]}>
        <Text style={styles.buttonText}>Luces apagadas</Text>
      </Pressable>
      <TouchableOpacity
        style={[
          styles.buttonConfirmarDesactivado,
          additionalButton ? styles.buttonConfirmarActivado : styles.buttonConfirmarDesactivado,
        ]}
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
    justifyContent: 'center',
  },
  buttonConfirmarActivado: {
    top: '4%', 
    width: '80%',
    borderWidth: 2,
    borderColor: '#2abbf5',
    borderRadius: 10,
    padding: 5,
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
    marginBottom: 20, 
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
    marginBottom: 20, 
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

export default App;
