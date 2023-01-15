import {Image, View, Text, StyleSheet, PixelRatio, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const fontScale = PixelRatio.getPixelSizeForLayoutSize(5.5);
const fontScaleElementos = PixelRatio.getPixelSizeForLayoutSize(6.1);

export default function ListaElementos({ lista, tit, setEliminaReserva }) {
  const navigation = useNavigation();

  const muestraModalDestructor = (boton, ele) => {
    Alert.alert(
      'Atención',
      '¿Seguro que quiere cancelar la reserva?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancela'),
        },
        {
          text: 'Confirmar',
          onPress: () => uncancell(boton, ele),
          style: 'destructive',
        },
      ]
    );
  };

  const uncancell = (boton, ele) => {
    {setEliminaReserva(boton + "," + ele)}
  };
  
  const vistaItem = (buttons, ele) => {
    if(typeof buttons === 'undefined' || !Array.isArray(buttons) || buttons.length === 0){
      muestraModalDestructor(buttons, ele);
    }else{
      navigation.navigate('ItemReservas', { buttons });
    }
  }
  
  const TextoRecursosInstalaciones = ({ Elemento, RutaImagen, bot }) => (
    <TouchableOpacity
      onPress={() => vistaItem(bot, Elemento)}>
      <View style={styles.card} key={Elemento + RutaImagen}>
        <Image style={styles.element_image} source={RutaImagen} />
        <Text style={styles.textMat}>{Elemento}</Text>
        {typeof bot === 'string' && <Text style={styles.textHora}>{bot.substring(0,5)}</Text>}
      </View>
    </TouchableOpacity>
  )

  return ( 
    <View style={styles.view}>
      <Text style={styles.subtitulo}>{tit}</Text>
      <View>
        <View>
          {lista.map((item, index) => (
            <TextoRecursosInstalaciones key={index} Elemento={item[0]} RutaImagen={item[1]} bot={item[2]}/>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({ 
  card: {
    top: 15, 
    margin: 12, 
    marginTop: 0, 
    paddingTop: 8, 
    paddingBottom: 8, 
    paddingLeft: 8, 
    paddingRight: 8, 
    fontSize: 15, 
    borderWidth: 2, 
    borderRadius: 15, 
    textAlign: 'left',
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    bottom: 15,
  },
  textMat: {
    textAlign: 'left',
    color: '#47525E',
    fontSize: fontScaleElementos,
    paddingTop: 12, 
    paddingBottom: 12, 
    paddingLeft: 10, 
    paddingRight: 10,
    marginRight: 0,
    justifyContent: 'center',
    alignItems: 'center', 
    flex:1
  },
  textHora: {
    textAlign: 'right',
    color: '#47525E',
    fontSize: fontScaleElementos,
    paddingTop: 12, 
    paddingBottom: 12, 
    paddingLeft: 10, 
    paddingRight: 10,
    marginRight: 0,
  },
  subtitulo: {
    backgroundColor: '#ecf0f1',
    color: '#47525E',
    fontSize: fontScale,
    paddingLeft: 10, 
  },
  view: {
    backgroundColor: '#ecf0f1',
    paddingBottom: 20,
  },
  element_image: {
    borderRadius: 10,
    borderWidth: 1,
    position: 'relative',
    width: '13%',
    height: '100%',
    resizeMode: 'contain',
    backgroundColor: '#f4f4f4',
    aspectRatio: 1,
    alignSelf: 'center',
  }
});
