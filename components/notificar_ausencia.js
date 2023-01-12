import React, { useState } from 'react';
import { View, Button, Pressable, StyleSheet, Text, PixelRatio, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useNavigation } from '@react-navigation/native';

const fontScale = PixelRatio.getPixelSizeForLayoutSize(6.5);
const fontScaleBotones = PixelRatio.getPixelSizeForLayoutSize(7.0);

const NotificarAusencia = () => {
  const navigation = useNavigation();
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [button4, setButton4] = useState(false);
  const [additionalButton, setAdditionalButton] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

  const handlePress = (buttonNumber) => {
    const updatedButton1 = buttonNumber === 1 ? !button1 : button1;
    const updatedButton2 = buttonNumber === 2 ? !button2 : button2;
    const updatedButton3 = buttonNumber === 3 ? !button3 : button3;
    const updatedButton4 = buttonNumber === 4 ? !button4 : button4;
    const updatedAdditionalButton = updatedButton1 || updatedButton2 || updatedButton3 || updatedButton4;

    setButton1(updatedButton1);
    setButton2(updatedButton2);
    setButton3(updatedButton3);
    setButton4(updatedButton4);
    setAdditionalButton(updatedAdditionalButton);
  };

  const vistaGuardias = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Guardias' }],
    });
  }

  return (
    <View style={styles.container}>
    <Text style={styles.textAusencia}>Indicar ausencia</Text>
      <View style={styles.dateContainer}>
      <Button 
          title={selectedDate.toLocaleDateString()}
          onPress={() => setIsDatePickerVisible(true)}
        />
        <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            date={selectedDate}
            onConfirm={(date) => {
              setSelectedDate(date);
              setIsDatePickerVisible(false);
            }}
            onCancel={() => setIsDatePickerVisible(false)}
            minimumDate={new Date()}
          />
        </View>
      <Pressable
        onPress={() => handlePress(1)}
        style={[
          button1 ? styles.activatedButton : styles.deactivatedButton,
        ]}>
        <Text style={styles.buttonText}>09:00 - 10:00</Text>
      </Pressable>
      <Pressable
        onPress={() => handlePress(2)}
        style={[
          button2 ? styles.activatedButton : styles.deactivatedButton,
        ]}>
        <Text style={styles.buttonText}>10:00 - 11:00</Text>
      </Pressable>
      <Pressable
        onPress={() => handlePress(3)}
        style={[
          button3 ? styles.activatedButton : styles.deactivatedButton,
        ]}>
        <Text style={styles.buttonText}>11:00 - 12:00</Text>
      </Pressable>
      <Pressable
        onPress={() => handlePress(4)}
        style={[
          button4 ? styles.activatedButton : styles.deactivatedButton,
        ]}>
        <Text style={styles.buttonText}>12:00 - 13:00</Text>
      </Pressable>
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