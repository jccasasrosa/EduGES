import {Image, View, Text, StyleSheet, PixelRatio } from 'react-native';

const fontScale = PixelRatio.getPixelSizeForLayoutSize(5.5);
const fontScaleElementos = PixelRatio.getPixelSizeForLayoutSize(6.1);

const TextoRecursosInstalaciones = ({ Elemento, RutaImagen }) => (
    <View style={styles.card} key={Elemento + RutaImagen}>
      <Text style={styles.fondoImagen}></Text>
      <Image style={styles.element_image} source={{uri: RutaImagen}} />
      <Text style={styles.textMat}>{Elemento}</Text>
    </View>
  );

export default function ListaElementos({ lista, tit }) {
  return ( 
    <View style={styles.view}>
      <Text style={styles.subtitulo}>{tit}</Text>
      <View>
        <View>
          {lista.map((item) => (
            <TextoRecursosInstalaciones key={item[0] + item[1]} Elemento={item[0]} RutaImagen={item[1]}/>
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
  fondoImagen: {
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#f4f4f4',
    fontSize: fontScaleElementos,
    alignContent: 'center',
    minWidth: 40,
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
    position: 'absolute',
    left: 10,
    top: 10,
    width: 35,
    height: 35
  }
});
