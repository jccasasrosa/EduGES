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

  return (
    <SafeAreaView style={styles.barraNegra}>
      <View style={styles.appBar}>
        <Text style={styles.title}>{titulo}</Text>
        <View style={styles.rightButtons}>
          <Image style={styles.icon} source={require(imgCampana)} onPress={() => {}} />
          <View style={styles.espacio}></View>
          <TouchableOpacity style={styles.icon} onPress={vistaAjustes}>
            <Image style={styles.iconImg} source={require(imgAjustes)} onPress={() => {}} />
            {/* <Button title="Opción 1" onPress={() => {}} />
            <Button title="Opción 2" onPress={() => {}} /> */}
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
    width: '40%',

  },
  rightButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  icon: {
    width: '20%',
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
    width: '7%',
  }
});
