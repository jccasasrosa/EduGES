import React from 'react';
import { View, Image, Text, StyleSheet, Pressable } from 'react-native';

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topSide}>
    
        <View style={styles.topContainer}>
          <Image style={styles.profileImage} source={require('./face_logo-removebg-preview.png')} />
          <Image style={styles.profilePlus} source={require('./plus.png')} />
          <Text style={styles.profileName}>Ra&uacute;l Ca&ntilde;ada</Text>
        </View>
        <View style={styles.card}>
        <Image style={styles.icon} source={require('./notification.png')} />
          <Text style={styles.optionTitle}>Notificaciones</Text>
        </View>
        <View style={styles.card}>
        <Image style={styles.icon} source={require('./lock.png')} />
          <Text style={styles.optionTitle}>Seguridad</Text>
        </View>
        <View style={styles.card}>
        <Image style={styles.icon} source={require('./language.png')} />
          <Text style={styles.optionTitle}>Idioma</Text>
          <Text style={styles.optionLanguage}>ES ></Text>
        </View>
      </View>
      <Pressable style={styles.boton}  onPress={() => {}}>
          <Text style={styles.textBoton}>Cerrar sesi&oacute;n</Text>
      </Pressable>
      <Text style={styles.textVersion}>Versi&oacute;n 1.0.1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    card: {
    alignSelf: 'center',
    top: 15, 
    width: '95%',
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
    alignItems: 'center',
    justifyContent: 'center'
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 50
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
    fontSize: 24,
    color: '#47525E'
  },
  optionTitle: {
    fontSize: 20,
    color: '#47525E'
  },
  optionLanguage: {
    fontSize: 20,
    position: 'absolute',
    right: 10,
    color: '#47525E'
  },
  boton: {
    width: '95%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#FC5555',
    padding: 10,
    backgroundColor: '#FFFFFF',
    alignSelf: 'center',
  },
  textBoton: {
    textAlign: "center",
    color: 'red',
    fontSize: 20,
  },
  textVersion: {
    textAlign: "center",
    borderColor: 'gray',
    borderTopWidth: 1,
    padding: 5,
    margin: 10,
    width: '90%',
    color: '#47525E',
  },
  topSide:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    width: '100%'
  }
});


export default SettingsScreen;