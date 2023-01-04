import React,  { useState } from 'react';
import { View, StyleSheet, Image, Platform, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const imgNavIzq = '../assets/eye.png';
const imgNavCentro= '../assets/home.png';
const imgNavDer = '../assets/class.png';
  
export default function AppBarInf(props) {
  const navigation = useNavigation();
  const { vista, cambiaVista, cambiaTitulo } = props;

  const vistaGuardias = () => {
    {cambiaVista('Guardias')}
    {cambiaTitulo('Guardias')}
    
    navigation.reset({
      index: 0,
      routes: [{ name: 'Guardias' }],
    });
  }

  const vistaHome = () => {
    //setVistaActual(1);
    {cambiaVista('Home')}
    {cambiaTitulo('Centro Jabalcuz')}

    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });

    //navigation.navigate('Home');
  }

  const vistaReservas = () => {
    //setVistaActual(2);
    {cambiaVista('Reservas')}
    {cambiaTitulo('Reservas')}
    
    navigation.reset({
      index: 0,
      routes: [{ name: 'Reservas' }],
    });
  }

  return (
    <View style={styles.appBar}>
      <View style={styles.elemento}>
        <TouchableOpacity onPress={vistaGuardias}>
          <Image style={styles.icon}
            source={require(imgNavIzq)} 
          />
        </TouchableOpacity>
        { vista === 'Guardias' ? (
          <View style={styles.punto}></View>
        ) : null}
      </View>
      <View style={styles.elemento}>
        <TouchableOpacity onPress={vistaHome}>
          <Image style={styles.icon}
            source={require(imgNavCentro)}
          />
        </TouchableOpacity>
        { vista === 'Home' ? (
          <View style={styles.punto}></View>
        ) : null}
      </View>
      <View style={styles.elemento}>
        <TouchableOpacity onPress={vistaReservas}>
            <Image style={styles.icon}
              source={require(imgNavDer)}
            />
        </TouchableOpacity>
        { vista === 'Reservas' ? (
          <View style={styles.punto}></View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    height: '10%',
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: Platform.OS === 'ios' ? '2%' : '2%',
    paddingBottom: Platform.OS === 'ios' ? '7%' : '7%',
  },
  elemento: {
    alignItems: 'center', // centra los elementos dentro de la vista
    position: 'relative',
  },
  icon: {
    height: '77%',
    resizeMode: 'contain',
    aspectRatio: 1,
  },
  punto: {
    width: 10, // ajusta el tamaño del punto a tu gusto
    height: 10,
    borderRadius: 10, // añade un borde redondeado al punto
    backgroundColor: '#2BC4F8', // ajusta el color del punto a tu gusto
    position: 'absolute', // añade la propiedad 'position: absolute' para posicionar el punto en relación al elemento padre
    top: -3, // ajusta la posición del punto en relación al elemento padre a tu gusto
    right: -3, // ajusta la posición del punto en relación al elemento padre a tu gusto
  },
});