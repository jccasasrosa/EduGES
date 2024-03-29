import React from 'react';
import { View, StyleSheet, Image, Text, Button, Platform, PixelRatio, SafeAreaView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const fontScale = PixelRatio.getPixelSizeForLayoutSize(8);
const imgCampana = '../assets/notification.png';
const imgAjustes = '../assets/settings.png';

export default function AppBarSup(props) {
  const navigation = useNavigation();
  const { titulo, cambiaTitulo } = props;

  const vistaAjustes = () => {
    //{cambiaTitulo('Ajustes')}

    navigation.reset({
      index: 0,
      routes: [{ name: 'Ajustes' }],
    });

    console.log(navigation); 
    navigation.navigate('Ajustes');
  }

  const vistaNotificaciones = () => {
    //{cambiaTitulo('Ajustes')}

    navigation.reset({
      index: 0,
      routes: [{ name: 'Notificaciones' }],
    });

    console.log(navigation); 
    navigation.navigate('Notificaciones');
  }

  return (
    <SafeAreaView style={styles.barraNegra}>
      <View style={styles.appBar}>
        <Text style={styles.title}>{titulo}</Text>
        <View style={styles.rightButtons}>
          <TouchableOpacity style={styles.icon} onPress={vistaNotificaciones}>
            <Image style={styles.icon} source={require(imgCampana)} onPress={() => {}} />
          </TouchableOpacity>
          <View style={styles.espacio}></View>
          <TouchableOpacity style={styles.icon} onPress={vistaAjustes}>
            <Image style={styles.iconImg} source={require(imgAjustes)} onPress={() => {}} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  appBar: {
    width: '100%',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    bottom: 0,
    left: 0,
    right: 0,
    //paddingTop: 10,
    paddingTop: Platform.OS === 'ios' ? '4%' : '4%',
    paddingBottom: Platform.OS === 'ios' ? '4%' : '4%',
    //paddingBottom: Platform.OS === 'ios' ? 10 : 10,
    //paddingLeft: 10,
  },
  barraNegra: {
    backgroundColor: "#000000",
  },
  title: {
    fontSize: fontScale,
    color: '#47525E',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '70%',
    left: '8%',
  },
  rightButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    right: '8%',
  },
  icon: {
    width: '18.5%',
    height: '100%',
    resizeMode: 'contain',
    aspectRatio: 1,
  },
  iconImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    aspectRatio: 1,
  },
  espacio: {
    width: '9%',
  }
});
