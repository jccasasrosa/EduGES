import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, PixelRatio, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const fontScale = PixelRatio.getPixelSizeForLayoutSize(5.5);
const fontScaleElementos = PixelRatio.getPixelSizeForLayoutSize(10.1);

export default function SettingsScreen(props) {
  const [isPressed, setIsPressed] = useState(false);
  const navigation = useNavigation();
  const login = props.route.params.login;
  const actualizaLogin = props.route.params.actualizaLogin;

  const muestraModal = () => {
    Alert.alert(
      'Atención',
      '¿Seguro que quieres cerrar sesión?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancela'),
        },
        {
          text: 'Confirmar',
          onPress: () => vistaLogin(),
          style: 'destructive',
        },
      ]
    );
  };

  const vistaLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });

    actualizaLogin(true);
  }

  return (
    <View style={styles.container}>
      <View style={styles.topSide}>
        <View style={styles.topContainer}>
          <Image style={styles.profileImage} source={require('../assets/persona.png')} />
          <Image style={styles.profilePlus} source={require('../assets/plus_blue.png')} />
          <Text style={styles.profileName}>Ra&uacute;l Ca&ntilde;ada</Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.icon} source={require('../assets/notification.png')} />
          <Text style={styles.optionTitle}>Notificaciones</Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.icon} source={require('../assets/lock.png')} />
          <Text style={styles.optionTitle}>Seguridad</Text>
        </View>
        <View style={styles.card}>
          <Image style={styles.icon} source={require('../assets/language.png')} />
          <Text style={styles.optionTitle}>Idioma</Text>
          <Text style={styles.optionLanguage}>ES {'>'}</Text>
        </View>
      </View>
      <View style={styles.bottomSide}>
        <TouchableOpacity style={[styles.boton, isPressed ? styles.botonPresionado : null]}
          onPressIn={() => setIsPressed(!isPressed)}
          onPressOut={() => setIsPressed(!isPressed)}
          onPress={muestraModal}>
            <Text style={[styles.textBoton, isPressed ? styles.textBotonPresionado : null]}>Cerrar sesi&oacute;n</Text>
        </TouchableOpacity>
        <Text style={styles.textVersion}>Versi&oacute;n 0.0.1</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignSelf: 'center',
    top: 15, 
    width: '90%',
    margin: 3, 
    marginTop: 0, 
    paddingTop: 8, 
    paddingBottom: 8, 
    paddingLeft: 8, 
    paddingRight: 8, 
    fontSize: 15, 
    borderWidth: 2, 
    borderRadius: 15, 
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    bottom: 15,
    justifyContent: 'flex-start',
    borderColor: 'gray'
  },
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
    marginLeft: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    marginLeft: 10,
    marginRight: 20,
    borderRadius: 90,
    borderWidth: 4,
    borderColor: 'black'
  },
  profilePlus: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: 60,
    left: 70
  },
  icon: {
    width: 30,
    height: 30,
    marginLeft: 5,
    marginRight: 10
  },
  profileName: {
    fontSize: fontScaleElementos,
    color: '#47525E'
  },
  optionTitle: {
    fontSize: fontScale,
    color: '#47525E',
    alignSelf: 'center',
  },
  optionLanguage: {
    fontSize: fontScale,
    position: 'absolute',
    right: 10,
    color: '#47525E',
    alignSelf: 'center',
  },
  boton: {
    width: '90%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FC5555',
    padding: 15,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
  },
  botonPresionado: {
    width: '90%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FC5555',
    padding: 15,
    backgroundColor: '#FC5555',
    alignSelf: 'center',
  },
  textBoton: {
    textAlign: "center",
    color: 'red',
    fontSize: fontScale,
  },
  textBotonPresionado: {
    textAlign: "center",
    color: 'white',
    fontSize: fontScale,
  },
  textVersion: {
    textAlign: "center",
    borderColor: 'gray',
    borderTopWidth: 1,
    padding: 5,
    margin: 10,
    width: '95%',
    color: '#47525E',
  },
  topSide:{
    alignSelf: 'flex-start',
    width: '100%',
  },
  bottomSide: {
    alignSelf: 'flex-end',
    width: '100%',
    bottom: '12%',
  }
});