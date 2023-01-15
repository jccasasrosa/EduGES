import React, { useState } from 'react';
import { View, Pressable, StyleSheet, Text, PixelRatio, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Fechas from './carruselFecha';

const fontScale = PixelRatio.getPixelSizeForLayoutSize(5.5);
const fontScaleBotones = PixelRatio.getPixelSizeForLayoutSize(6.1);

const buttons = [
  {
      text: '09:00 - 10:00',
      state: false,
  },
  {
      text: '10:00 - 11:00',
      state: false,
  },
  {
      text: '11:00 - 12:00',
      state: false,
  },
  {
      text: '12:00 - 13:00',
      state: false,
  },
  {
      text: '13:00 - 14:00',
      state: false,
  },
  {
      text: '14:00 - 15:00',
      state: false,
  }
]

const NotificarAusencia = () => {
  const navigation = useNavigation();
  const [activeButtons, setActiveButtons] = useState(buttons);
  const [additionalButton, setAdditionalButton] = useState(false);

  const handlePress = (buttonNumber) => {
    let aux = [...activeButtons];
    aux[buttonNumber].state = !aux[buttonNumber].state;
    setActiveButtons(aux);
    
    setAdditionalButton(false);
    aux.map((item, index) => {
      if(item.state === true){
        setAdditionalButton(true);
      }
    });
  };

  const vistaGuardias = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Guardias' }],
    });

    let aux = [...activeButtons];
    aux.map((item, index) => {
      item.state = false;
    });
    setActiveButtons(aux);
  }

  return (
    <ScrollView style={styles.containerScroll}>
      <View style={styles.container}>
        <Text style={styles.textAusencia}>Indicar ausencia</Text>
        <Fechas/>
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
          onPress={vistaGuardias}
          disabled={!additionalButton}>
          <Text style={[
            styles.confirmarButtonTextDeactivated,
            additionalButton ? styles.confirmarButtonTextActivated : styles.confirmarButtonTextDeactivated,
          ]}
          disabled={!additionalButton}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  containerScroll: {
    flex: 1,
    width: '100%',
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
    marginBottom: 140,
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
    marginBottom: 140,
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
    backgroundColor: '#2abbf5',
    flexDirection: 'column',
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
    flexDirection: 'column',
    bottom: 15,
    justifyContent: 'flex-start',
    borderColor: 'gray'
  },
  buttonText: {
    textAlign: "center",
    fontSize: fontScale,
    color: 'black',
    padding: 10,
    paddingTop: 12,
    paddingBottom: 12,
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
  textAusencia: {
    textAlign: "left",
    borderColor: 'gray',
    fontSize: fontScale,
    marginLeft: 10,
    width: '90%',
    color: '#47525E',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    color: 'gray',
  }
});

export default NotificarAusencia;